window.search = {"doc_urls":["booting.html#booting","example.html#example-configuration","tiny-risc/index.html#tiny-risc","tiny-risc/isa.html#isa","api.html#api"],"index":{"documentStore":{"docInfo":{"0":{"body":62,"breadcrumbs":1,"title":1},"1":{"body":51,"breadcrumbs":2,"title":2},"2":{"body":11,"breadcrumbs":2,"title":2},"3":{"body":232,"breadcrumbs":3,"title":1},"4":{"body":4,"breadcrumbs":1,"title":1}},"docs":{"0":{"body":"On boot, all CPUs should be in a logical \"halt\" state, where no action will be taken until a message is received. The CPU with the lowest device ID will receive an interrupt whose address' low 48 bits are all zeroes, and whose data byte is all ones. If the interrupt was sent by device ID 0x0000 , the CPU is the first to be enabled. When enabled, the CPU should start executing instructions, starting at address 0x0000000000000000 . This maps to device ID 0x0000 , which should be the system ROM. This CPU can wake up other CPUs by sending them interrupts like above. TODO: How do CPUs that use architectures other than the \"main one\" get started?","breadcrumbs":"Booting","id":"0","title":"Booting"},"1":{"body":"This defines a single CPU and 64MB of DRAM, booting off of the ROM image in boot.bin. { \"busses\": [ [ 0, 1, 2, 3 ], [ 3, 4 ], ], \"devices\": [ { \"type\": \"rom\", \"file\": \"boot.bin\" }, { \"type\": \"tiny-risc\", \"speed\": 8 }, { \"type\": \"dram\", \"size\": 8388608, \"read-time\": 1, \"write-time\": 1 }, { \"type\": \"tiny-risc\", \"speed\": 1 }, { \"type\": \"dram\", \"size\": 67108864, \"read-time\": 4, \"write-time\": 8 } ]\n}","breadcrumbs":"Example Configuration","id":"1","title":"Example Configuration"},"2":{"body":"tiny-risc is a simple architecture made to demonstrate mpisa, while not being simple to the point of ridiculousness.","breadcrumbs":"tiny-risc","id":"2","title":"tiny-risc"},"3":{"body":"The tiny-risc ISA is designed for simplicity. There are 63 general-purpose registers, a zero register, an instruction pointer, and 3 flag bits. Instructions are each 24 bits in length, and predicated. LSB MSB\n+--------+----+------------+------------+------------+\n| Opcode |Pred| Register A | Register B | Register C |\n+--------+----+------------+------------+------------+\n0 4 6 12 18 24 Opcodes are as follows: Opcode Mnemonic Args Description 0x0 HLT 0 Puts the CPU into a halt state. 0x1 LOD 2+i Loads the value from the memory address given by B plus the immediate into A. 0x2 STO 2+i Stores the value in A to the memory address given by B plus the immediate. 0x3 MOV 2 Moves the value in A to B. 0x4 IMM 1+i Stores the immediate in the low 12 bits of A. 0x5 ADD 3 Stores the result of adding A and B in C. 0x6 MUL 3 Stores the result of multiplying A and B in C. 0x7 AND 3 Stores the result of bitwise ANDing A and B in C. 0x8 OR 3 Stores the result of bitwise ORing A and B in C. 0x9 XOR 3 Stores the result of bitwise XORing A and B in C. 0xa ROT 3 Stores the result of rotating A right by B bits in C. 0xb JMP 1 Sets the instruction pointer to the value in A. 0xc JMP+ 0+i Adds the immediate to the instruction pointer. 0xd JMP- 0+i Subtracts the immediate from the instruction pointer. 0xe INT 2 Sends an interrupt to the address in A, with the data in the low byte of B. 0xf RSVD 3 Reserved for later definition. Note: Where Args is of the form x+i , there are x register arguments, and the rest of the instruction is treated as an immediate. Predicates are as follows: Pred Name Description 0b00 NONE The instruction will unconditionally execute. 0b01 ZERO The instruction will execute if the zero flag is set. 0b10 NEG The instruction will execute if the negative flag is set. 0b11 OVER The instruction will execute if the overflow flag is set. Registers are identified by their number, where the zero register has number zero. Writing to the zero register has no observable effect, and reading from it always results in zero.","breadcrumbs":"tiny-risc » ISA","id":"3","title":"ISA"},"4":{"body":"API documentation can be found here .","breadcrumbs":"API","id":"4","title":"API"}},"length":5,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{"+":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"b":{"0":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"1":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"1":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"1":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":2,"docs":{"1":{"tf":1.0},"3":{"tf":1.4142135623730951}},"x":{"0":{"0":{"0":{"0":{"0":{"0":{"0":{"0":{"0":{"0":{"0":{"0":{"0":{"0":{"0":{"0":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"3":{"tf":1.0}}},"1":{"df":1,"docs":{"3":{"tf":1.0}}},"2":{"df":1,"docs":{"3":{"tf":1.0}}},"3":{"df":1,"docs":{"3":{"tf":1.0}}},"4":{"df":1,"docs":{"3":{"tf":1.0}}},"5":{"df":1,"docs":{"3":{"tf":1.0}}},"6":{"df":1,"docs":{"3":{"tf":1.0}}},"7":{"df":1,"docs":{"3":{"tf":1.0}}},"8":{"df":1,"docs":{"3":{"tf":1.0}}},"9":{"df":1,"docs":{"3":{"tf":1.0}}},"a":{"df":1,"docs":{"3":{"tf":1.0}}},"b":{"df":1,"docs":{"3":{"tf":1.0}}},"c":{"df":1,"docs":{"3":{"tf":1.0}}},"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}},"f":{"df":1,"docs":{"3":{"tf":1.0}}}}},"1":{"+":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}},"2":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"8":{"df":1,"docs":{"3":{"tf":1.0}}},"df":2,"docs":{"1":{"tf":2.0},"3":{"tf":1.0}}},"2":{"+":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"4":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":2,"docs":{"1":{"tf":1.0},"3":{"tf":1.4142135623730951}}},"3":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"3":{"tf":2.8284271247461903}}},"4":{"8":{"df":1,"docs":{"0":{"tf":1.0}}},"df":2,"docs":{"1":{"tf":1.4142135623730951},"3":{"tf":1.0}}},"6":{"3":{"df":1,"docs":{"3":{"tf":1.0}}},"4":{"df":0,"docs":{},"m":{"b":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"7":{"1":{"0":{"8":{"8":{"6":{"4":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"3":{"tf":1.0}}},"8":{"3":{"8":{"8":{"6":{"0":{"8":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"a":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}}},"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"d":{"d":{"df":1,"docs":{"3":{"tf":1.4142135623730951}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"3":{"tf":1.7320508075688772}}}}}}},"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"n":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"r":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.4142135623730951}},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}},"b":{"df":1,"docs":{"3":{"tf":3.3166247903554}},"e":{"df":1,"docs":{"2":{"tf":1.0}}},"i":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":2.0}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{".":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}}}},"c":{"df":1,"docs":{"3":{"tf":2.6457513110645907}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}},"p":{"df":0,"docs":{},"u":{"df":3,"docs":{"0":{"tf":2.6457513110645907},"1":{"tf":1.0},"3":{"tf":1.0}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"v":{"df":0,"docs":{},"i":{"c":{"df":2,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.0}}},"df":0,"docs":{}}}},"o":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"r":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"n":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":2.0}}}}},"df":0,"docs":{}}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"l":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":2.0}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.0}}}},"u":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}},"h":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"i":{"d":{"df":1,"docs":{"0":{"tf":1.7320508075688772}},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.0}},"e":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":2.449489742783178}}}},"df":0,"docs":{}}}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":3.1622776601683795}}}},"df":0,"docs":{}}}}},"t":{"df":1,"docs":{"3":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.7320508075688772},"3":{"tf":1.0}}}}}}}}}},"s":{"a":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"j":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}}},"l":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"o":{"a":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"w":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"s":{"b":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}},"m":{"a":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"p":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"s":{"df":0,"docs":{},"s":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"3":{"tf":1.0}},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"a":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}},"s":{"b":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}},"o":{"b":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"p":{"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}},"df":0,"docs":{}}},"df":0,"docs":{}},"r":{"df":1,"docs":{"3":{"tf":1.0}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}},"f":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":2.0}}}}}}}},"r":{"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"3":{"tf":1.4142135623730951}},"i":{"c":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"3":{"tf":1.0}}},"df":0,"docs":{}},"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":3.0}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":1,"docs":{"3":{"tf":1.0}}}}},"t":{"df":1,"docs":{"3":{"tf":1.0}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":2.6457513110645907}}}}}}},"i":{"d":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"s":{"c":{"df":3,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.4142135623730951},"3":{"tf":1.0}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"m":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.4142135623730951}}},"t":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":1,"docs":{"3":{"tf":1.0}}}},"s":{"df":0,"docs":{},"v":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}},"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"t":{"df":1,"docs":{"3":{"tf":2.0}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.4142135623730951}},"i":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}},"z":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}},"t":{"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":2.8284271247461903}}}}}},"u":{"b":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"t":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":2.0}}}},"n":{"df":0,"docs":{},"i":{"df":3,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.4142135623730951},"3":{"tf":1.0}}}}},"o":{"d":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":2.23606797749979}}}}}},"u":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"p":{"df":1,"docs":{"0":{"tf":1.0}}},"s":{"df":1,"docs":{"0":{"tf":1.0}}}},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":1,"docs":{"3":{"tf":2.0}}}}},"df":0,"docs":{}},"w":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"3":{"tf":1.0}}}}}}},"x":{"+":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":1,"docs":{"3":{"tf":1.0}},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"z":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":2.6457513110645907}}}}}}}},"breadcrumbs":{"root":{"0":{"+":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"b":{"0":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"1":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"1":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"1":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":2,"docs":{"1":{"tf":1.0},"3":{"tf":1.4142135623730951}},"x":{"0":{"0":{"0":{"0":{"0":{"0":{"0":{"0":{"0":{"0":{"0":{"0":{"0":{"0":{"0":{"0":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"3":{"tf":1.0}}},"1":{"df":1,"docs":{"3":{"tf":1.0}}},"2":{"df":1,"docs":{"3":{"tf":1.0}}},"3":{"df":1,"docs":{"3":{"tf":1.0}}},"4":{"df":1,"docs":{"3":{"tf":1.0}}},"5":{"df":1,"docs":{"3":{"tf":1.0}}},"6":{"df":1,"docs":{"3":{"tf":1.0}}},"7":{"df":1,"docs":{"3":{"tf":1.0}}},"8":{"df":1,"docs":{"3":{"tf":1.0}}},"9":{"df":1,"docs":{"3":{"tf":1.0}}},"a":{"df":1,"docs":{"3":{"tf":1.0}}},"b":{"df":1,"docs":{"3":{"tf":1.0}}},"c":{"df":1,"docs":{"3":{"tf":1.0}}},"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}},"f":{"df":1,"docs":{"3":{"tf":1.0}}}}},"1":{"+":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}},"2":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"8":{"df":1,"docs":{"3":{"tf":1.0}}},"df":2,"docs":{"1":{"tf":2.0},"3":{"tf":1.0}}},"2":{"+":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"4":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":2,"docs":{"1":{"tf":1.0},"3":{"tf":1.4142135623730951}}},"3":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"3":{"tf":2.8284271247461903}}},"4":{"8":{"df":1,"docs":{"0":{"tf":1.0}}},"df":2,"docs":{"1":{"tf":1.4142135623730951},"3":{"tf":1.0}}},"6":{"3":{"df":1,"docs":{"3":{"tf":1.0}}},"4":{"df":0,"docs":{},"m":{"b":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"7":{"1":{"0":{"8":{"8":{"6":{"4":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"3":{"tf":1.0}}},"8":{"3":{"8":{"8":{"6":{"0":{"8":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"a":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}}},"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"d":{"d":{"df":1,"docs":{"3":{"tf":1.4142135623730951}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"3":{"tf":1.7320508075688772}}}}}}},"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"n":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}}},"r":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.4142135623730951}},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}},"b":{"df":1,"docs":{"3":{"tf":3.3166247903554}},"e":{"df":1,"docs":{"2":{"tf":1.0}}},"i":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":2.0}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{".":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"df":2,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}}}},"c":{"df":1,"docs":{"3":{"tf":2.6457513110645907}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}}}},"p":{"df":0,"docs":{},"u":{"df":3,"docs":{"0":{"tf":2.6457513110645907},"1":{"tf":1.0},"3":{"tf":1.0}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"v":{"df":0,"docs":{},"i":{"c":{"df":2,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.0}}},"df":0,"docs":{}}}},"o":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"r":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"n":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":2.0}}}}},"df":0,"docs":{}}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"l":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":2.0}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.0}}}},"u":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}},"h":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"i":{"d":{"df":1,"docs":{"0":{"tf":1.7320508075688772}},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.0}},"e":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":2.449489742783178}}}},"df":0,"docs":{}}}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":3.1622776601683795}}}},"df":0,"docs":{}}}}},"t":{"df":1,"docs":{"3":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.7320508075688772},"3":{"tf":1.0}}}}}}}}}},"s":{"a":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}},"df":0,"docs":{}}},"j":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}}},"l":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"o":{"a":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"w":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"s":{"b":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}},"m":{"a":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"p":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"s":{"df":0,"docs":{},"s":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"3":{"tf":1.0}},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"a":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}},"s":{"b":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}},"o":{"b":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"p":{"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}},"df":0,"docs":{}}},"df":0,"docs":{}},"r":{"df":1,"docs":{"3":{"tf":1.0}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}},"f":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":2.0}}}}}}}},"r":{"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"3":{"tf":1.4142135623730951}},"i":{"c":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"3":{"tf":1.0}}},"df":0,"docs":{}},"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":3.0}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":1,"docs":{"3":{"tf":1.0}}}}},"t":{"df":1,"docs":{"3":{"tf":1.0}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":2.6457513110645907}}}}}}},"i":{"d":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"s":{"c":{"df":3,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.7320508075688772},"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"m":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.4142135623730951}}},"t":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":1,"docs":{"3":{"tf":1.0}}}},"s":{"df":0,"docs":{},"v":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}},"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"t":{"df":1,"docs":{"3":{"tf":2.0}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.4142135623730951}},"i":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}},"z":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}},"t":{"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":2.8284271247461903}}}}}},"u":{"b":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"t":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":2.0}}}},"n":{"df":0,"docs":{},"i":{"df":3,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.7320508075688772},"3":{"tf":1.4142135623730951}}}}},"o":{"d":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":2.23606797749979}}}}}},"u":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"p":{"df":1,"docs":{"0":{"tf":1.0}}},"s":{"df":1,"docs":{"0":{"tf":1.0}}}},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":1,"docs":{"3":{"tf":2.0}}}}},"df":0,"docs":{}},"w":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"3":{"tf":1.0}}}}}}},"x":{"+":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":1,"docs":{"3":{"tf":1.0}},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"z":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":2.6457513110645907}}}}}}}},"title":{"root":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}},"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"s":{"a":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"c":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}};