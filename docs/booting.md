Booting
=======

On boot, all CPUs should be in a logical "halt" state, where no action will be taken until a message is received. The CPU with the lowest device ID will receive an interrupt whose address' low 48 bits are all zeroes, and whose data byte is all ones. If the interrupt was sent by device ID `0x0000`, the CPU is the first to be enabled.

When enabled, the CPU should start executing instructions, starting at address `0x0000000000000000`. This maps to device ID `0x0000`, which should be the system ROM. This CPU can wake up other CPUs by sending them interrupts like above.

**TODO: How do CPUs that use architectures other than the "main one" get started?**
