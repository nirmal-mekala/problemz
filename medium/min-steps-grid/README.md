# Minimum Steps in Grid

## Problem
Given a 2D grid of booleans where `true` represents a wall and `false` represents an open cell, compute the minimum number of steps needed to move from a start coordinate to an end coordinate. Movement is allowed only in the four cardinal directions (up, right, down, left).

Return `null` if the start/end is out of bounds, blocked by a wall, or if the end is unreachable.

## Function Signature
`minStepsInGrid(grid: boolean[][], start: [number, number], end: [number, number]): number | null`

## Example
Grid:
```
[ [false, false, false, false],
  [true,  true,  false, true ],
  [false, false, false, false],
  [false, false, false, false] ]
```
Start `(3, 0)`, end `(0, 0)` => minimum steps is `7`.
