use crate::{
    devices::{DeserializeDevice, Device},
    types::Message,
    Config, ConfigDevice, Error, ErrorKind,
};
use rayon::prelude::*;
use serde_json::from_reader;
use std::{collections::VecDeque, fs::File, io::BufReader, path::Path};

/// The state of a complete simulation.
#[derive(Debug)]
pub struct State {
    /// The devices being simulated, as well as their message queues.
    devices: Vec<(Box<dyn Device>, VecDeque<Message>)>,
}

impl State {
    /// Creates a `State`.
    pub fn new(devices: Vec<Box<dyn Device>>) -> State {
        let devices = devices
            .into_iter()
            .map(|dev| (dev, VecDeque::new()))
            .collect();
        State { devices }
    }

    /// Creates a `State` from a `Config`.
    pub fn from_config(config: Config) -> Result<State, Error> {
        config
            .devices
            .into_iter()
            .map(|ConfigDevice { type_, rest }| {
                (inventory::iter::<DeserializeDevice>
                    .into_iter()
                    .find(|dev| dev.name == type_)
                    .ok_or_else(|| ErrorKind::UnknownDeviceName(type_))?
                    .from_value)(rest)
            })
            .collect::<Result<Vec<_>, _>>()
            .map(State::new)
    }

    /// Creates a `State` from a config file.
    pub fn from_config_file(path: &Path) -> Result<State, Error> {
        File::open(path)
            .map_err(|err| Error::with_cause(ErrorKind::FailedToReadConfig, err))
            .map(BufReader::new)
            .and_then(|file| {
                from_reader(file)
                    .map_err(|err| Error::with_cause(ErrorKind::FailedToReadConfig, err))
            })
            .and_then(State::from_config)
    }

    /// Runs a single step on all devices.
    pub fn step(&mut self) {
        let devices = &mut self.devices;
        let new_msgs = devices
            .into_par_iter()
            .flat_map(|(dev, msgs)| dev.step(msgs.pop_front()))
            .collect::<Vec<_>>();
        for msg in new_msgs {
            let dev_id: u16 = msg.addr.dev_id().into();
            devices[dev_id as usize].1.push_back(msg);
        }
    }
}
