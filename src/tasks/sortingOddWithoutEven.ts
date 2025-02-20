const isOdd = (value: number) => {
  return value % 2 === 0;
};

/**
 * function sorts odd numbers and leaves even numbers in their places
 * ```ts
 *  sortingOddWithoutEven([2,9,5,7,4,3,8,1,2,4]) -> [2,1,3,5,4,7,8,9,2,4]
 * ```
 * @param {number[]} arr - value to be sorted
 * @returns sorted array
 * */
export const sortingOddWithoutEven = (arr: number[]): number[] => {
  // Extract odd numbers and sort them in ascending order
  const sortedOdds = arr.filter((num) => !isOdd(num)).sort((a, b) => a - b);

  // Replace odd numbers in the original array while keeping even numbers in place
  let oddIndex = 0;
  return arr.map((num) => {
    if (!isOdd(num)) {
      return sortedOdds[oddIndex++];
    } else {
      return num;
    }
  });
};
