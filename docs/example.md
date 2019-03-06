Example Configuration
=====================

This defines a single CPU and 64MB of DRAM, booting off of the ROM image in boot.bin.

```json
{
  "busses": [
    [ 0, 1, 2, 3 ],
    [ 3, 4 ],
  ],
  "devices": [
    { "type": "rom", "file": "boot.bin" },
    { "type": "tiny-risc", "speed": 8 },
    { "type": "dram", "size": 8388608, "read-time": 1, "write-time": 1 },
    { "type": "tiny-risc", "speed": 1 },
    { "type": "dram", "size": 67108864, "read-time": 4, "write-time": 8 }
  ]
}
```
