# Text Justification

Write an algorithm to justify text. Given a sequence of words and an integer line
length `k`, return a list of strings which represents each line, fully justified.

Rules:
- Fit as many words as possible in each line.
- There is at least one space between each word.
- Pad extra spaces so each line has exactly length `k`.
- Distribute spaces as equally as possible; extra spaces go to the left.
- If a line has only one word, pad on the right.

Each word is guaranteed not to be longer than `k`.

## Example

Input:
`words = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]`
`k = 16`

Output:
`["the  quick brown", "fox  jumps  over", "the   lazy   dog"]`
