/// Registers a device type in the device registry. See example:
///
/// ```
/// # use mpisa::{devices::Device, types::{DevID, Message}, Result, register_device};
/// # use serde_derive::Deserialize;
/// # fn main() {}
/// #[derive(Debug)]
/// struct Foo;
///
/// impl Foo {
///     fn new(config: FooConfig) -> Result<Foo> {
///         unimplemented!()
///     }
/// }
///
/// impl Device for Foo {
///     fn reset(&mut self, id: DevID) {
///         unimplemented!()
///     }
///
///     fn step(&mut self, bus_state: Option<Message>) -> Option<Message> {
///         unimplemented!()
///     }
/// }
///
/// #[derive(Deserialize)]
/// struct FooConfig {
///     bar: usize,
///     baz: String,
/// }
///
/// register_device!(Foo as "foo");
/// ```
#[macro_export]
macro_rules! register_device {
    ($ty:ty as $name:expr) => {
        inventory::submit! {
            $crate::devices::DeserializeDevice::new($name, |val| {
                let config = serde_json::from_value(val).map_err(|err| {
                    $crate::Error::with_cause($crate::ErrorKind::FailedToParseDevice, err)
                })?;
                let device = <$ty>::new(config)?;
                Ok(Box::new(device))
            })
        }
    };
}
