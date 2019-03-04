//! The devices that can be put into the simulation.

#[macro_use]
mod macros;

use crate::{types::Message, Error};
use serde_json::Value;
use std::fmt::Debug;

/// A single device.
pub trait Device: 'static + Debug + Send + Sync {
    /// Runs the device for a single step.
    fn step(&mut self, bus_state: Option<Message>) -> Option<Message>;
}

/// A device that can be deserialized. Use this as:
///
/// ```
/// # use mpisa::devices::DeserializeDevice;
/// # fn main() {}
/// inventory::submit! {
///     DeserializeDevice::new("foo", |val| unimplemented!("parse val"))
/// }
/// ```
#[derive(Derivative)]
#[derivative(Debug)]
pub struct DeserializeDevice {
    /// Loads the device from a JSON value.
    #[derivative(Debug = "ignore")]
    pub from_value: Box<Fn(Value) -> Result<Box<dyn Device>, Error>>,

    /// The name of the device type.
    pub name: String,
}

impl DeserializeDevice {
    /// Creates a new DeserializeDevice.
    pub fn new(
        name: &str,
        from_value: impl Fn(Value) -> Result<Box<dyn Device>, Error> + 'static,
    ) -> DeserializeDevice {
        DeserializeDevice {
            name: name.to_string(),
            from_value: Box::new(from_value),
        }
    }
}

inventory::collect!(DeserializeDevice);
