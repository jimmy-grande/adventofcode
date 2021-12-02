type Day1Input = number[];
type CountLargerMeasurementFromPrevious = (input: Day1Input) => number;

type Aggregate = {
  previousDepth: number;
  count: number;
};

type GetMeasurement = (values: number[]) => (index: number) => number;

const getMeasurement: GetMeasurement = (values) => (index) => values[index] + values[index + 1] + values[index + 2];
const countLargerMeasurementFromPrevious: CountLargerMeasurementFromPrevious = (input) => {
  const defaultValue: Aggregate = {
    previousDepth: NaN,
    count: 0,
  };
  function reduceDepth(acc: Aggregate, depth: number, index: number, values: number[]) {
    return {
      previousDepth: depth,
      count: acc.previousDepth < depth ? ++acc.count : acc.count,
    };
  }
  const measurements = input.reduce<number[]>((acc, _, index) => [...acc, getMeasurement(input)(index)], []);
  return measurements.reduce(reduceDepth, defaultValue).count;
};

export default countLargerMeasurementFromPrevious;
