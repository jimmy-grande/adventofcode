type Day1Input = number[];
type CountLargerMeasurmentFromPrevious = (input: Day1Input) => number;

type Aggregate = {
  previousDepth: number;
  count: number;
};
const countLargerMeasurmentFromPrevious: CountLargerMeasurmentFromPrevious = (input) => {
  const defaultValue: Aggregate = {
    previousDepth: NaN,
    count: 0,
  };
  function reduceDepth(acc: Aggregate, depth: number) {
    return {
      previousDepth: depth,
      count: acc.previousDepth < depth ? ++acc.count : acc.count,
    };
  }

  return input.reduce(reduceDepth, defaultValue).count;
};

export default countLargerMeasurmentFromPrevious;
