/**
 * Creates a function that delays the execution of the provided function.
 *
 * @param {Function} fs - The function to be delayed.
 * @param {number} ms - The number of milliseconds to delay execution.
 * @returns {Function} A function that delays execution by the specified time.
 *
 * @example
 * const delayedLog = delay(console.log, 1000);
 * delayedLog("Hello, world!"); // Logs "Hello, world!" after 1 second
 */
export const delay = (fs: Function, ms: number): Function => {
  return new Proxy(fs, {
    apply(target: Function, thisArg: any, argArray: any[]): any {
      setTimeout(() => target.apply(thisArg, argArray), ms);
    },
  });
};
