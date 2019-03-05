use crate::{
    devices::{util::LinearMemory, Device},
    types::{DevID, Message, MessageKind},
    Error, ErrorKind, Result,
};
use serde_derive::Deserialize;

/// A block of readable and writable memory.
#[derive(Debug)]
struct Dram {
    id: DevID,
    mem: LinearMemory,
}

impl Dram {
    pub fn new(config: DramConfig) -> Result<Dram> {
        let size = config.size;
        if size > (std::usize::MAX as u64) {
            Err(Error::from(ErrorKind::Custom(format!(
                "Impossibly large DRAM ({} bytes)",
                size
            ))))
        } else {
            Ok(Dram {
                id: DevID(0),
                mem: LinearMemory::with_size(size as usize),
            })
        }
    }
}

impl Device for Dram {
    fn reset(&mut self, id: DevID) {
        self.id = id;
    }

    fn step(&mut self, bus_state: Option<Message>) -> Option<Message> {
        let msg = bus_state?;
        match msg.kind {
            MessageKind::Read => Some(Message {
                kind: MessageKind::ReadResp,
                sender: self.id,
                addr: msg.addr.with_dev_id(msg.sender),
                data: self.mem.read(msg.addr, msg.size),
                size: msg.size,
            }),
            MessageKind::Write => {
                self.mem.write(msg.addr, msg.size, msg.data);
                None
            }
            MessageKind::ReadResp | MessageKind::Interrupt => None,
        }
    }
}

/// The configuration for a ROM.
#[derive(Debug, Deserialize)]
struct DramConfig {
    pub size: u64,
}

register_device!(Dram as "dram");
