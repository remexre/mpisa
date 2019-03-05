Example Configuration
=====================

This defines a single CPU and 64MB of DRAM, booting off of the ROM image in boot.bin.

```json
{
  "devices": [
    { "type": "rom", "file": "boot.bin" },
    { "type": "tiny-risc" },
    { "type": "dram", "size": 67108864 }
  ]
}
```
