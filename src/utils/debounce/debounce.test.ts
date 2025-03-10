import { debounce } from "./debounce";

jest.useFakeTimers();

describe("debounce", () => {
  let fn: jest.Mock;
  let debouncedFn: (...args: any[]) => void;

  beforeEach(() => {
    fn = jest.fn();
    debouncedFn = debounce(fn, 500);
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.clearAllMocks();
  });

  it("should delay execution of the function", () => {
    debouncedFn();
    expect(fn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(500);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should reset the timer if called again before delay", () => {
    debouncedFn();
    jest.advanceTimersByTime(300);
    debouncedFn();
    jest.advanceTimersByTime(300);
    expect(fn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(200);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should pass arguments correctly", () => {
    debouncedFn("Hello", 123);
    jest.advanceTimersByTime(500);
    expect(fn).toHaveBeenCalledWith("Hello", 123);
  });

  it("should preserve the context of the function", () => {
    const obj = {
      value: 42,
      fn(this: any) {
        return this.value;
      },
    };

    const spy = jest.spyOn(obj, "fn");
    const debouncedFn = debounce(obj.fn, 500);

    debouncedFn.call(obj);
    jest.advanceTimersByTime(500);

    expect(spy).toHaveReturnedWith(42);
  });
});
