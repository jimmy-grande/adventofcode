type Point = [x: number, y: number];
type Segment = [Point, Point];

type ParseInput = (input: string) => Segment[];
const parseInput: ParseInput = (input) => {
  const rows = input.split("\n");
  return rows.map((row) => {
    const [x, y] = row.split(" -> ");
    const xPoint = x.split(",").map((v) => parseInt(v));
    const yPoint = y.split(",").map((v) => parseInt(v));
    return [xPoint, yPoint] as Segment;
  });
};

export const part1 = (input: string): number => {
  const parsedInput: Segment[] = parseInput(input);
  const positions = parsedInput.flatMap(segmentToRangePoint);

  const map: { [key: string]: number } = positions.reduce((acc: any, point) => {
    const key = point.toString();
    if (key in acc) {
      acc[key] = acc[key] + 1;
    } else {
      acc[key] = 1;
    }
    return acc;
  }, {});
  return Object.values(map).filter((v) => v >= 2).length;
};

type SegmentToRangePoint = (segment: Segment) => Point[];
const segmentToRangePoint: SegmentToRangePoint = (segment) => {
  const [[x1, y1], [x2, y2]] = segment;
  const points: Point[] = [];

  if (x1 === x2) {
    // vertical move
    points.push([x1, y1]);
    const add = y1 < y2 ? 1 : -1;
    let z1 = y1;
    while (z1 !== y2) {
      z1 = z1 + add;
      points.push([x1, z1]);
    }
  }

  if (y1 === y2) {
    // horizontal move
    points.push([x1, y1]);
    const add = x1 < x2 ? 1 : -1;
    let z2 = x1;
    while (z2 !== x2) {
      z2 = z2 + add;
      points.push([z2, y1]);
    }
  }
  return points;
};
const segmentToRangePointV2: SegmentToRangePoint = (segment) => {
  const [[x1, y1], [x2, y2]] = segment;
  const points: Point[] = [];

  if (x1 === x2) {
    // vertical move
    points.push([x1, y1]);
    const add = y1 < y2 ? 1 : -1;
    let z1 = y1;
    while (z1 !== y2) {
      z1 = z1 + add;
      points.push([x1, z1]);
    }
  } else if (y1 === y2) {
    // horizontal move
    points.push([x1, y1]);
    const add = x1 < x2 ? 1 : -1;
    let z2 = x1;
    while (z2 !== x2) {
      z2 = z2 + add;
      points.push([z2, y1]);
    }
  } else if (x1 === y1 && x2 === y2) {
    let z3 = x1;
    points.push([x1, y1]);
    const add = x1 < x2 ? 1 : -1;
    while (z3 !== x2) {
      z3 = z3 + add;
      points.push([z3, z3]);
    }
  } else if (x1 === y2 && y1 === x2) {
    let z4 = x1;
    let z5 = x2;
    points.push([x1, y1]);
    const addZ4 = x1 < x2 ? 1 : -1;
    const addZ5 = y1 < y2 ? 1 : -1;
    while (z4 !== x2 && z5 !== x1) {
      z4 = z4 + addZ4;
      z5 = z5 + addZ5;
      points.push([z4, z5]);
    }
  } else if (Math.abs(x1 - x2) === Math.abs(y1 - y2)) {
    let z4 = x1;
    let z5 = y1;
    points.push([x1, y1]);
    const addZ4 = x1 < x2 ? 1 : -1;
    const addZ5 = y1 < y2 ? 1 : -1;
    while (z4 !== x2 && z5 !== y2) {
      z4 = z4 + addZ4;
      z5 = z5 + addZ5;
      points.push([z4, z5]);
    }
  }
  return points;
};
export const part2 = (input: string): number => {
  const parsedInput: Segment[] = parseInput(input);
  const positions = parsedInput.flatMap(segmentToRangePointV2);
  const map: { [key: string]: number } = positions.reduce((acc: any, point) => {
    const key = point.toString();
    if (key in acc) {
      acc[key] = acc[key] + 1;
    } else {
      acc[key] = 1;
    }
    return acc;
  }, {});

  return Object.values(map).filter((v) => v >= 2).length;
};
