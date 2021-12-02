import exercise from "./index";
import input from "./part1.json";

describe("Part 1: count larger values", () => {
  it("should return the total of values that are larger from previous one", () => {
    // ARRANGE
    const simpleDataset = [1, 10, 5];
    // ACT
    const result = exercise(simpleDataset);
    // ASSERT
    expect(result).toEqual(1);
  });
});
