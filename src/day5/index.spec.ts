import { part1, part2 } from "./";
import input from "./task";

const sample =
  //
  `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`;

describe("Day5", () => {
  it("part1", () => {
    const expectedSampleResult = 5;
    const expectedResult = 6267;

    const sampleResult = part1(sample);
    const result = part1(input);

    expect(sampleResult).toEqual(expectedSampleResult);
    expect(result).toEqual(expectedResult);
  });

  it("part2", () => {
    const expectedSampleResult = 12;
    const expectedResult = 2583164;

    const sampleResult = part2(sample);
    const result = part2(input);

    expect(sampleResult).toEqual(expectedSampleResult);
    expect(result).toEqual(expectedResult);
  });
});
