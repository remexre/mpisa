//! Basic types used throughout.

/// An address.
#[derive(Clone, Copy, Debug, Display, Eq, From, Into, Ord, PartialEq, PartialOrd)]
#[display(fmt = "{:p}", _0)]
#[repr(transparent)]
pub struct Addr(pub u64);

impl Addr {
    /// Gets the low 48 bits of the address.
    pub fn base(self) -> u64 {
        self.0 & 0x0000_ffff_ffff_ffff
    }

    /// Gets the corresponding device ID.
    pub fn dev_id(self) -> DevID {
        DevID((self.0 >> 48) as _)
    }

    /// Sets the device ID.
    pub fn with_dev_id(self, id: DevID) -> Addr {
        Addr(((id.0 as u64) << 48) | self.base())
    }
}

/// The identifier for an address on the message bus.
#[derive(Clone, Copy, Debug, Display, Eq, From, Into, Ord, PartialEq, PartialOrd)]
#[display(fmt = "0x{:02x}", _0)]
#[repr(transparent)]
pub struct DevID(pub u16);

/// A value going on the message bus.
#[derive(Clone, Copy, Debug, Eq, Ord, PartialEq, PartialOrd)]
#[repr(C)]
pub struct Message {
    /// The address being read from or written to, or the interrupt ID.
    pub addr: Addr,

    /// The ID of the device sending the message.
    pub sender: DevID,

    /// The data associated with a read response, write, or interrupt.
    pub data: u8,

    /// The kind of message being sent.
    pub kind: MessageKind,
}

/// The kind of a message on the bus.
#[derive(Clone, Copy, Debug, Eq, Ord, PartialEq, PartialOrd)]
pub enum MessageKind {
    /// A request to read from memory.
    Read,

    /// A request to write to memory.
    Write,

    /// The data that was read.
    ReadResp,

    /// An interrupt.
    Interrupt,
}
