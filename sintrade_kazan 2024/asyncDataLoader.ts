export const asyncDataLoader = async (filename: string) => {
  const data = await import(`../data/${filename}.json`);
  return data.default;
};
