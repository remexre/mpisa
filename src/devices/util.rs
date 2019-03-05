//! Utilities for implementing devices.

use crate::types::{Addr, MessageSize};

/// A wrapper around a `Vec<u8>` to make reads and writes easier to implement.
#[derive(Clone, Constructor, Debug, From, Into)]
pub struct LinearMemory(Vec<u8>);

impl LinearMemory {
    /// Creates a new `LinearMemory` with a zero-initialized buffer of the given length.
    pub fn with_size(size: usize) -> LinearMemory {
        LinearMemory::new(vec![0; size])
    }

    /// Tries to read from the `LinearMemory`. An out-of-bounds read will be filled with zeroes.
    pub fn read(&self, addr: Addr, size: MessageSize) -> u64 {
        match size {
            MessageSize::U8 => {
                let i = addr.base();
                if i > (std::usize::MAX as u64) {
                    0
                } else if (i as usize) < self.0.len() {
                    self.0[i as usize] as u64
                } else {
                    0
                }
            }
            MessageSize::U16 => {
                let low = self.read(addr, MessageSize::U8);
                let high = self.read(addr + 1, MessageSize::U8);
                (high << 8) | low
            }
            MessageSize::U32 => {
                let low = self.read(addr, MessageSize::U16);
                let high = self.read(addr + 2, MessageSize::U16);
                (high << 16) | low
            }
            MessageSize::U64 => {
                let low = self.read(addr, MessageSize::U32);
                let high = self.read(addr + 4, MessageSize::U32);
                (high << 32) | low
            }
        }
    }

    /// Tries to write to the `LinearMemory`. An out-of-bounds write will be ignored.
    pub fn write(&mut self, addr: Addr, size: MessageSize, data: u64) {
        match size {
            MessageSize::U8 => {
                let i = addr.base();
                if i <= (std::usize::MAX as u64) && (i as usize) < self.0.len() {
                    self.0[i as usize] = data as u8;
                }
            }
            MessageSize::U16 => {
                self.write(addr, MessageSize::U8, data);
                self.write(addr + 1, MessageSize::U8, data >> 8);
            }
            MessageSize::U32 => {
                self.write(addr, MessageSize::U16, data);
                self.write(addr + 2, MessageSize::U16, data >> 16);
            }
            MessageSize::U64 => {
                self.write(addr, MessageSize::U32, data);
                self.write(addr + 4, MessageSize::U32, data >> 32);
            }
        }
    }
}
