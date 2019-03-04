//! The devices that can be put into the simulation.

use crate::types::Message;
use std::fmt::Debug;

/// A single device.
pub trait Device: 'static + Debug + Send + Sync {
    /// Runs the device for a single step.
    fn step(&mut self, bus_state: Option<Message>) -> Option<Message>;
}
