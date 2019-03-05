//! An experimental ISA simulator for a message-passing ISA.
#![deny(
    bad_style,
    const_err,
    dead_code,
    improper_ctypes,
    legacy_directory_ownership,
    missing_copy_implementations,
    missing_debug_implementations,
    missing_docs,
    no_mangle_generic_items,
    non_shorthand_field_patterns,
    overflowing_literals,
    path_statements,
    patterns_in_fns_without_body,
    plugin_as_library,
    private_in_public,
    safe_extern_statics,
    trivial_casts,
    trivial_numeric_casts,
    unconditional_recursion,
    unions_with_drop_fields,
    unused,
    unused_allocation,
    unused_comparisons,
    unused_extern_crates,
    unused_import_braces,
    unused_parens,
    unused_qualifications,
    unused_results,
    while_true
)]

#[macro_use]
extern crate derivative;
#[macro_use]
extern crate derive_more;

pub mod devices;
mod sim;
pub mod types;

pub use crate::sim::State;
use serde_derive::Deserialize;
use serde_json::Value;

/// The configuration for the simulation.
#[derive(Debug, Deserialize)]
pub struct Config {
    /// The devices present.
    pub devices: Vec<ConfigDevice>,
}

/// The entry for a device in the configuration.
#[derive(Debug, Deserialize)]
pub struct ConfigDevice {
    /// The type of device.
    #[serde(rename = "type")]
    pub type_: String,

    /// The remaining fields.
    #[serde(flatten)]
    pub rest: Value,
}

/// An error.
pub type Error = libremexre::errors::GenericError<ErrorKind>;

/// The kind of an error that occurred.
#[derive(Debug, Display)]
pub enum ErrorKind {
    /// Failed to parse a device.
    #[display(fmt = "Failed to parse a device")]
    FailedToParseDevice,

    /// Failed to read the config file.
    #[display(fmt = "Failed to read the config file.")]
    FailedToReadConfig,

    /// Too many devices were attempted to be attached to a `State`.
    #[display(fmt = "Too many devices were attempted to be attached")]
    TooManyDevices(usize),

    /// Cannot create device a with an unknown name.
    #[display(fmt = "Cannot create device with unknown name: {:?}", _0)]
    UnknownDeviceName(String),

    /// A custom error.
    Custom(String),
}

/// A convenient Result alias.
pub type Result<T> = std::result::Result<T, Error>;
