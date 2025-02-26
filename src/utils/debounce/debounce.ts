/**
 * Creates a debounced function that delays invoking the provided function until after
 * a specified delay (`ms`) has elapsed since the last time it was invoked.
 *
 * @param fn - The function to debounce.
 * @param ms - The number of milliseconds to wait before invoking `fn`.
 * @returns A new function that delays the execution of `fn` until after `ms` milliseconds.
 *
 * @example
 * ```ts
 * const log = (msg: string) => console.log(msg);
 * const debouncedLog = debounce(log, 500);
 *
 * debouncedLog("Hello");
 * debouncedLog("World"); // Only "World" will be logged after 500ms
 * ```
 */
export const debounce = (fn: Function, ms: number) => {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return function (...args: any[]) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, ms);
  };
};
