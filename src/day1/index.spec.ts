import exercise from "./index";
import input from "./part1.json";

describe("day1: count larger values", () => {
  it("part 1: should return the total of values that are larger from previous one", () => {
    // ARRANGE
    const simpleDataset = [1, 10, 5];
    const day1Part1Result = 1532;
    // ACT
    const result = exercise(simpleDataset);
    const complexResult = exercise(input);
    // ASSERT
    expect(result).toEqual(1);
    expect(complexResult).toEqual(day1Part1Result);
  });
});
