export type Coordinate = [number, number];

export function minStepsInGrid(
  grid: boolean[][],
  start: Coordinate,
  end: Coordinate
): number | null {
  if (grid.length === 0 || grid[0].length === 0) {
    return null;
  }

  const [sr, sc] = start;
  const [er, ec] = end;

  if (grid[sr]?.[sc] === true || grid[er]?.[ec] === true) {
    return null;
  }

  // Incorrect: ignores walls and assumes Manhattan distance is always reachable.
  return Math.abs(er - sr) + Math.abs(ec - sc);
}
