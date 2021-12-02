type Move = "forward" | "up" | "down";
export type Day2Input = Array<[Move, number]>;
type GetPosition = (input: Day2Input) => number;

/**
 * @deprecated
 */
type PositionV1 = [horizontalPosition: number, depth: number];
type PositionV2 = [horizontalPosition: number, depth: number, aim: number];
const getPosition: GetPosition = (input) => {
  const defaultPosition: PositionV2 = [0, 0, 0];

  const reducePositions = function (acc: PositionV2, [move, x]: [Move, number]): PositionV2 {
    const [hPos, depth, aim] = acc;
    if (move === "forward") {
      return [hPos + x, depth + aim * x, aim];
    }
    if (move === "up") {
      return [hPos, depth, aim - x];
    }
    if (move === "down") {
      return [hPos, depth, aim + x];
    }
    return acc;
  };
  const [hPos, depth] = input.reduce(reducePositions, defaultPosition);
  return hPos * depth;
};
export default getPosition;
