export const addNumbers = (...args: number[]): number => {
  const result = args.reduce((cur, acc) => cur + acc, 0);
  return result;
};
