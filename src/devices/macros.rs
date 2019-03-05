/// Registers a device type (that is `DeserializeOwned`) in the device registry.
#[macro_export]
macro_rules! register_device {
    ($ty:ty) => {
        $crate::register_device!($ty, stringify!($ty))
    };

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
