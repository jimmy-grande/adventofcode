import getPosition, { Day2Input } from "./index";
import input from "./input.json";

describe("day 2: calculate horizontal postion and depth", () => {
  it("part 1: should return the sum of horizontal position and depth", () => {
    // ARRANGE
    const simpleDataset: Day2Input = [
      ["forward", 5],
      ["down", 5],
      ["forward", 8],
      ["up", 3],
      ["down", 8],
      ["forward", 2],
    ];
    const day2Part1Result = 2272262;
    // ACT
    const result = getPosition(simpleDataset);
    const complexResult = getPosition(input as Day2Input);
    // ASSERT
    expect(result).toEqual(150);
    expect(complexResult).toEqual(day2Part1Result);
  });
});
