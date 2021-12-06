export type Board = [[number, number, number, number, number], [number, number, number, number, number], [number, number, number, number, number], [number, number, number, number, number], [number, number, number, number, number]] | null;

type Draw = number[];
type Row = [number, number, number, number, number];
type Col = [number, number, number, number, number];
type UnmarkedNumbers = number[];
type Bingo = (board: Board, draw: Draw) => boolean;

const bingo: Bingo = (board, draw) => {
  return board!.some((row, index) => {
    const didRowComplete = row.every((value) => draw.includes(value));
    const didColComplete = readBoardCol(board, index).every((value) => draw.includes(value));
    return didRowComplete || didColComplete;
  });
};

type ReadBoard = (board: Board, index: number) => Row | Col;
const readBoardRow: ReadBoard = (board, index) => {
  return board![index];
};
const readBoardCol: ReadBoard = (board, target) => {
  const defaultColumn = new Array<number>(5) as Col;
  return board!.reduce<Col>((acc, row, index) => {
    acc[index] = row[target];
    return acc;
  }, defaultColumn);
};

type GetUnmarkedNumbers = (board: Board, draw: Draw) => UnmarkedNumbers;
const getUnmarkedNumbers: GetUnmarkedNumbers = (board, draw) => {
  const unmarkedNumbers: UnmarkedNumbers = [];
  board!.reduce((unmarked, row) => {
    unmarkedNumbers.push(...row.filter((value) => !draw.includes(value)));
    return unmarkedNumbers;
  }, unmarkedNumbers);

  return unmarkedNumbers;
};

type Sum = (array: number[]) => number;
const sum: Sum = (array) => (array.length ? array.reduce((acc, value) => acc + value) : NaN);

type RunDraw = (drawSet: Draw) => (board: Board, index: number) => number;
const runDraw: RunDraw = (drawSet) => (board, index) => {
  const didWin = bingo(board, drawSet);
  return didWin ? sum(getUnmarkedNumbers(board, drawSet)) * drawSet.slice(-1)[0] : NaN;
};

type PlayBingo = (boards: Board[], draw: Draw) => Promise<number>;
export const playBingo: PlayBingo = async (boards, draw) => {
  const currentDraw: Draw = [];
  for (const drawItem of draw) {
    currentDraw.push(drawItem);
    const results = await Promise.all(boards.map(runDraw(currentDraw)));
    const bingo = results.find((v) => !Number.isNaN(v));
    if (bingo) {
      return bingo;
    }
  }
  return NaN;
};

const GREEN_LOG = (value: number) => `\x1b[32m${value.toString().padStart(2, " ")}\x1b[32m\x1b[0m`;
const visualize = (board: Board, drawSet: Draw) => {
  return board!.map((row) => row.map((value) => (drawSet.includes(value) ? GREEN_LOG(value) : value.toString().padStart(2, " "))).join(" ")).join("\n");
};

export const part2: PlayBingo = async (boards, draw) => {
  const currentDraw: Draw = [];
  const bingos: any = {};
  const initialBoards = boards.length;

  for (const drawItem of draw) {
    currentDraw.push(drawItem);
    for (let i = 0; i < initialBoards; i++) {
      // console.log("Board:::%d/%d\t%d\n%o", i, initialBoards, drawItem, boards[i]?.toString());
      const result = runDraw(currentDraw)(boards[i], i);
      if (Object.keys(bingos).length === initialBoards && !Number.isNaN(result)) {
        console.log("FINAL:::", drawItem, result, i, boards[i]);
        return bingos[i-1];
      }
      if (!Number.isNaN(result)) {
        bingos[i] = result;
      }
      // if (y === initialBoards - 1) {
      //   console.log("Final:", result);
      //   return result;
      // }
      // if (!Number.isNaN(result)) {
      //   console.log("DELETE INDEX", i, drawItem);
      //   y++;
      //   console.log("remaining [%d/%d]", boards.filter((b) => !!b).length, initialBoards);
      //   break;
      // }
    }
  }
  return NaN;
};
