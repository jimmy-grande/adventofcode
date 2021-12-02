import exercise from "./index";
import input from "./part1.json";

describe("day1: count larger values", () => {
  /**
   * @deprecated
   */
  //   it("part 1: should return the total of values that are larger from previous one", () => {
  //     // ARRANGE
  //     const simpleDataset = [1, 10, 5];
  //     const day1Part1Result = 1532;
  //     // ACT
  //     const result = exercise(simpleDataset);
  //     const complexResult = exercise(input);
  //     // ASSERT
  //     expect(result).toEqual(1);
  //     expect(complexResult).toEqual(day1Part1Result);
  //   });

  it("part 2: should return the total of a measurments that are larger from previous one", () => {
    // ARRANGE
    const simpleDataset = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    const day1Part2Result = 1571;
    // ACT
    const result = exercise(simpleDataset);
    const complexResult = exercise(input);
    // ASSERT
    expect(result).toEqual(5);
    expect(complexResult).toEqual(day1Part2Result);
  });
});
