use crate::{devices::Device, types::Message};
use rayon::prelude::*;
use std::collections::VecDeque;

/// The state of a complete simulation.
#[derive(Debug)]
pub struct State {
    /// The devices being simulated, as well as their message queues.
    devices: Vec<(Box<dyn Device>, VecDeque<Message>)>,
}

impl State {
    /// Creates a `State`.
    pub fn new<I, T>(devices: I) -> State
    where
        I: IntoIterator<Item = T>,
        T: Into<Box<dyn Device>>,
    {
        let devices = devices
            .into_iter()
            .map(|dev| (dev.into(), VecDeque::new()))
            .collect();
        State { devices }
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
