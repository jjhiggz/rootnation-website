export const rainbowAssigner = (index: number): string => {
  if (index > 6) {
    return rainbowAssigner(index - 7);
  }

  return [
    "red-600",
    "yellow-600",
    "yellow-300",
    "green-400",
    "blue-400",
    "pink-400",
    "purple-400",
  ][index];
};
