/// An address.
#[derive(Clone, Copy, Debug, Display, Eq, From, Into, Ord, PartialEq, PartialOrd)]
#[display(fmt = "{:p}", _0)]
pub struct Addr(pub u64);

impl Addr {
    /// Gets the corresponding device ID.
    pub fn dev_id(self) -> DevID {
        DevID((self.0 >> 48) as _)
    }
}

/// The identifier for an address on the message bus.
#[derive(Clone, Copy, Debug, Display, Eq, From, Into, Ord, PartialEq, PartialOrd)]
#[display(fmt = "0x{:02x}", _0)]
pub struct DevID(pub u16);

/// A value going on the message bus.
#[derive(Clone, Copy, Debug, Eq, Ord, PartialEq, PartialOrd)]
pub struct Message {
    /// The kind of message being sent.
    pub message_type: MessageType,

    /// The ID of the device sending the message.
    pub sender_dev: DevID,

    /// The address being read from or written to, or the interrupt ID.
    pub addr: Addr,

    /// The data associated with a read response, write, or interrupt.
    pub data: u64,
}

/// The type of a message on the bus.
#[derive(Clone, Copy, Debug, Eq, Ord, PartialEq, PartialOrd)]
pub enum MessageType {
    /// A request to read from memory.
    Read,

    /// A request to write to memory.
    Write,

    /// The data that was read.
    ReadResp,

    /// An interrupt.
    Interrupt,
}
