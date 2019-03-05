ISA
===

The tiny-risc ISA is designed for simplicity. There are 63 general-purpose registers, a zero register, an instruction pointer, and 3 flag bits. Instructions are each 24 bits in length, and predicated.

```text
LSB                                                MSB
+--------+----+------------+------------+------------+
| Opcode |Pred| Register A | Register B | Register C |
+--------+----+------------+------------+------------+
0        4    6           12           18           24
```

Opcodes are as follows:

| Opcode | Mnemonic | Args | Description                                                                   |
|:------:|:--------:|:----:|:------------------------------------------------------------------------------|
| `0x0`  |   HLT    |  0   | Puts the CPU into a halt state.                                               |
| `0x1`  |   LOD    | 2+i  | Loads the value from the memory address given by B plus the immediate into A. |
| `0x2`  |   STO    | 2+i  | Stores the value in A to the memory address given by B plus the immediate.    |
| `0x3`  |   MOV    |  2   | Moves the value in A to B.                                                    |
| `0x4`  |   IMM    | 1+i  | Stores the immediate in the low 12 bits of A.                                 |
| `0x5`  |   ADD    |  3   | Stores the result of adding A and B in C.                                     |
| `0x6`  |   MUL    |  3   | Stores the result of multiplying A and B in C.                                |
| `0x7`  |   AND    |  3   | Stores the result of bitwise ANDing A and B in C.                             |
| `0x8`  |    OR    |  3   | Stores the result of bitwise ORing A and B in C.                              |
| `0x9`  |   XOR    |  3   | Stores the result of bitwise XORing A and B in C.                             |
| `0xa`  |   ROT    |  2   | Rotates A by B bits.                                                          |
| `0xb`  |   JMP    |  1   | Sets the instruction pointer to the value in A.                               |
| `0xc`  |   JMP+   | 0+i  | Adds the immediate to the instruction pointer.                                |
| `0xd`  |   JMP-   | 0+i  | Subtracts the immediate from the instruction pointer.                         |
| `0xe`  |   INT    |  2   | Sends an interrupt to the address in A, with the data in the low byte of B.   |
| `0xf`  |   RSVD   |  3   | Reserved for later definition.                                                |

**Note:** Where Args is of the form `x+i`, there are `x` register arguments, and the rest of the instruction is treated as an immediate.

Predicates are as follows:

| `Pred` | Name | Description                                               |
|:------:|:----:|:----------------------------------------------------------|
| `0b00` | NONE | The instruction will unconditionally execute.             |
| `0b01` | ZERO | The instruction will execute if the zero flag is set.     |
| `0b10` | NEG  | The instruction will execute if the negative flag is set. |
| `0b11` | OVER | The instruction will execute if the overflow flag is set. |

Registers are identified by their number, where the zero register has number zero. Writing to the zero register has no observable effect, and reading from it always results in zero.
