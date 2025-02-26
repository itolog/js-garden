import findUnique from "./index";

describe("findUnique", () => {
  it("should return an array with unique value", () => {
    expect(findUnique([10, 5, 10, 0, 6, 6, 7, 2, 9, 9])).toEqual([5, 0, 7, 2]);
  });
});
