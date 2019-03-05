use crate::{
    devices::Device,
    types::{DevID, Message, MessageKind},
    Error, ErrorKind, Result,
};
use serde_derive::Deserialize;
use std::{fs::read, path::PathBuf};

/// A block of read-only memory, loaded from a file. This is primarily for the boot ROM, which must
/// be device 0.
#[derive(Debug)]
struct Rom {
    contents: Vec<u8>,
    id: DevID,
}

impl Rom {
    pub fn new(config: RomConfig) -> Result<Rom> {
        match read(&config.file) {
            Ok(contents) => Ok(Rom {
                contents,
                id: DevID(0),
            }),
            Err(err) => Err(Error::with_cause(
                ErrorKind::Custom(format!("Couldn't read ROM file {}", config.file.display())),
                err,
            )),
        }
    }
}

impl Device for Rom {
    fn reset(&mut self, id: DevID) {
        self.id = id;
    }

    fn step(&mut self, bus_state: Option<Message>) -> Option<Message> {
        let msg = bus_state?;
        if msg.kind != MessageKind::Read {
            return None;
        }

        let i = msg.addr.base();
        let data = if i >= (self.contents.len() as u64) {
            0
        } else {
            self.contents[i as usize]
        };

        Some(Message {
            kind: MessageKind::ReadResp,
            sender: self.id,
            addr: msg.addr.with_dev_id(msg.sender),
            data,
        })
    }
}

/// The configuration for a ROM.
#[derive(Debug, Deserialize)]
struct RomConfig {
    pub file: PathBuf,
}

register_device!(Rom as "rom");
