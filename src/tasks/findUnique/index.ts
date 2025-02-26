const findUnique = (array: number[]) => {
  const countMap: Record<string, number> = array.reduce((acc: Record<string, number>, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});

  return array.filter((el: number) => {
    if (countMap[el] === 1) {
      return String(el);
    }
  });
};

export default findUnique;
