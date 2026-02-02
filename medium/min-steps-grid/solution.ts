export type Coordinate = [number, number];

export function minStepsInGrid(
  grid: boolean[][],
  start: Coordinate,
  end: Coordinate
): number | null {
  if (grid.length === 0 || grid[0].length === 0) {
    return null;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  const [sr, sc] = start;
  const [er, ec] = end;

  if (
    sr < 0 ||
    sc < 0 ||
    er < 0 ||
    ec < 0 ||
    sr >= rows ||
    er >= rows ||
    sc >= cols ||
    ec >= cols
  ) {
    return null;
  }

  if (grid[sr][sc] || grid[er][ec]) {
    return null;
  }

  if (sr === er && sc === ec) {
    return 0;
  }

  const visited: boolean[][] = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => false)
  );

  const queue: Array<[number, number, number]> = [[sr, sc, 0]];
  visited[sr][sc] = true;

  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
  ];

  while (queue.length > 0) {
    const [r, c, dist] = queue.shift()!;

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      if (nr < 0 || nc < 0 || nr >= rows || nc >= cols) {
        continue;
      }
      if (grid[nr][nc] || visited[nr][nc]) {
        continue;
      }

      if (nr === er && nc === ec) {
        return dist + 1;
      }

      visited[nr][nc] = true;
      queue.push([nr, nc, dist + 1]);
    }
  }

  return null;
}
