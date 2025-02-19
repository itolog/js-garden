/**
 * Create a function to calculate the change. The function must take two input parameters: the amount of change (an integer) and the available denominations (an array of integers). The function must calculate the denominations of the change. The number of coins must be minimal. The change must be given exactly. The function must return the result as an array of integers. If it is impossible to give change with the specified denominations, the function must return null.
 *
 * @param {number} changeAmount - Change amount
 * @param {number[]} availableDenominations - Available denominations.
 * @example
 * console.log(rest(9, [1, 2, 5, 10, 25, 50])); // [5, 2, 2]
 * console.log(rest(14, [1, 2, 5, 10, 25, 50])); // [10, 2, 2]
 * console.log(rest(56, [1, 2, 5, 10, 25, 50])); // [50, 5, 1]
 * console.log(rest(23, [1, 2, 5, 10, 25, 50])); // [10, 10, 2, 1]
 * console.log(rest(21, [1, 2, 5, 10, 25, 50])); // [10, 10, 1]
 * console.log(rest(21, [2, 5, 10, 25, 50])); // [10, 5, 2, 2, 2]
 * console.log(rest(23, [2, 5, 10, 25, 50])); // [10, 5, 2, 2, 2, 2]
 * console.log(rest(53, [2, 5, 10, 25, 50])); // [25, 10, 10, 2, 2, 2, 2];
 * console.log(rest(43, [2, 5, 10, 50])); // [10, 10, 10, 5, 2, 2, 2, 2]
 * console.log(rest(3, [5, 10])); // null
 *
 * @todo Implement this function.
 */
export const calculateRest = (changeAmount: number, availableDenominations: number[]): number[] => {
  console.log("changeAmount", changeAmount);
  console.log("availableDenominations", availableDenominations);
  return [2];
};
