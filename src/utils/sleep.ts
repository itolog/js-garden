/**
 * ```ts
 *    sleep(2000).then(() => {
 *       console.log("sleep");
 *     });
 * ```
 * ```ts
 *   await sleep(1000)
 *   console.log("First")
 *   await sleep(1000)
 *   console.log("Second")
 *   await sleep(1000)
 *   console.log("Third")
 * ```
 * @param {number} ms - delay
 *
 * */
export const sleep = (ms: number): Promise<unknown> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
