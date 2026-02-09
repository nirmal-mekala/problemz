export function justifyText(words: string[], k: number): string[] {
  const lines: string[] = [];
  let i = 0;

  while (i < words.length) {
    let j = i;
    let lineLen = 0;

    while (j < words.length) {
      const nextLen = lineLen === 0 ? words[j].length : lineLen + 1 + words[j].length;
      if (nextLen > k) break;
      lineLen = nextLen;
      j++;
    }

    const lineWords = words.slice(i, j);
    const wordsLen = lineWords.reduce((sum, w) => sum + w.length, 0);
    const gaps = Math.max(0, lineWords.length - 1);
    const spacesToDistribute = k - wordsLen;

    if (gaps === 0) {
      lines.push(lineWords[0] + " ".repeat(spacesToDistribute));
    } else {
      const base = Math.floor(spacesToDistribute / gaps);
      const extra = spacesToDistribute % gaps;
      let line = "";
      for (let idx = 0; idx < lineWords.length; idx++) {
        line += lineWords[idx];
        if (idx < gaps) {
          const pad = base + (idx < extra ? 1 : 0);
          line += " ".repeat(pad);
        }
      }
      lines.push(line);
    }

    i = j;
  }

  return lines;
}
