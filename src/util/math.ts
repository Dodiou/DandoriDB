export const round = (num: number, toDecimals: number = 0): number => {
  const magnitude = 10 ** toDecimals;
  return Math.round(num * magnitude) / magnitude;
}

export const randomInteger = (from: number, to: number): number => {
  const range = (to - from);
  const num = Math.round(Math.random() * range);
  return num + from;
}
