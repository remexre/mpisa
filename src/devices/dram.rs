use crate::{
    devices::Device,
    types::{DevID, Message, MessageKind},
    Error, ErrorKind, Result,
};
use serde_derive::Deserialize;

/// A block of readable and writable memory.
#[derive(Debug)]
struct Dram {
    contents: Vec<u8>,
    id: DevID,
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
                contents: vec![0; size as usize],
                id: DevID(0),
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
        let i = msg.addr.base();
        let ok = i < (self.contents.len() as u64);
        match msg.kind {
            MessageKind::Read => Some(Message {
                kind: MessageKind::ReadResp,
                sender: self.id,
                addr: msg.addr.with_dev_id(msg.sender),
                data: if ok { self.contents[i as usize] } else { 0 },
            }),
            MessageKind::Write => {
                if ok {
                    self.contents[i as usize] = msg.data;
                }

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
