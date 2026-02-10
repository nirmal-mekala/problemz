# Run-Length Encoding

Difficulty: easy

## Problem
Implement run-length encoding and decoding.

Run-length encoding represents repeated successive characters as a count followed by the character.
For example, the string "AAAABBBCCDAA" is encoded as "4A3B2C1D2A".

Implement two functions:

- `encode(input: string): string`
- `decode(input: string): string`

You can assume:
- The string to be encoded has no digits and consists solely of alphabetic characters.
- The string to be decoded is valid.

## Examples

- `encode("AAAABBBCCDAA")` returns `"4A3B2C1D2A"`
- `encode("ABCD")` returns `"1A1B1C1D"`
- `decode("4A3B2C1D2A")` returns `"AAAABBBCCDAA"`
- `decode("1A1B1C1D")` returns `"ABCD"`
