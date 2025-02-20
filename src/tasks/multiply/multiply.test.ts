import multiply from "./index.ts";

describe("multiply", () => {
  it("should multiply positive numbers", () => {
    expect(multiply(2, 2)).toBe(4);
  });
});
