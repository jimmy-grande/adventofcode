type Move = "forward" | "up" | "down";
export type Day2Input = Array<[Move, number]>;
type GetPosition = (input: Day2Input) => number;

type PositionV1 = [horizontalPosition: number, depth: number];
const getPosition: GetPosition = (input) => {
  const defaultPosition: PositionV1 = [0, 0];

  const reducePositions = function (acc: PositionV1, [move, x]: [Move, number]): PositionV1 {
    const [hPos, depth] = acc;
    if (move === "forward") {
      return [hPos + x, depth];
    }
    if (move === "up") {
      return [hPos, depth - x];
    }
    if (move === "down") {
      return [hPos, depth + x];
    }
    return acc;
  };
  const [hPos, depth] = input.reduce(reducePositions, defaultPosition);
  return hPos * depth;
};
export default getPosition;
