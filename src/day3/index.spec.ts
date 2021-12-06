import { part1, part2 } from "./";
import input from "./task.json";

const sample = ["00100", "11110", "10110", "10111", "10101", "01111", "00111", "11100", "10000", "11001", "00010", "01010"];

describe("Day3", () => {
  it("part1", () => {
    const expectedSampleResult = 198;
    const expectedResult = 2583164;

    const sampleResult = part1(sample);
    const result = part1(input as string[]);

    expect(sampleResult).toEqual(expectedSampleResult);
    expect(result).toEqual(expectedResult);
  });

  it("part2", () => {
    const expectedSampleResult = 230;
    const expectedResult = 2784375;

    const sampleResult = part2(sample);
    const result = part2(input as string[]);

    expect(sampleResult).toEqual(expectedSampleResult);
    expect(result).toEqual(expectedResult);
  });
});
