/// Registers a device type (that is `DeserializeOwned`) in the device registry.
#[macro_export]
macro_rules! register_device {
    ($ty:ty) => {
        inventory::submit! {
            mpisa::devices::DeserializeDevice::new(stringify!($ty), |val| {
                let device = serde_json::from_value(val).map_err(|err| {
                    mpisa::Error::with_cause(mpisa::ErrorKind::FailedToParseDevice, err)
                })?;
                Ok(Box::new(device))
            })
        }
    };
}
