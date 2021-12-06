export const part1 = (input: string[]): number => {
  const map: { [key: string]: number | string } = {};
  for (var i = 0; i <= input[0].length - 1; i++) {
    const sum = input.reduce((acc, value) => acc + parseInt(value[i]), 0);
    map[i] = sum >= input.length / 2 ? 1 : 0;
  }
  const gammaRate = Object.values(map).reduce((acc, value) => acc + value.toString()) as string;

  const epsilonRate = Array.from(gammaRate)
    .map((v) => (v === "1" ? "0" : "1"))
    .join("");

  return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
};

export const part2 = (input: string[]): number => {
  let oxygenValues = input;
  let co2Values = input;
  let oxygenRate: number = 0,
    co2Rate: number = 0;

  for (var i = 0; i <= input[0].length - 1; i++) {
    const sum = oxygenValues.reduce((acc, value) => acc + parseInt(value[i]), 0);
    const o2Match = sum >= oxygenValues.length / 2 ? "1" : "0";
    oxygenValues = oxygenValues.filter((v) => v[i] === o2Match);
    if (oxygenValues.length === 1) {
      oxygenRate = parseInt(oxygenValues[0], 2);
      break;
    }
  }

  for (var i = 0; i <= input[0].length - 1; i++) {
    const sum = co2Values.reduce((acc, value) => acc + parseInt(value[i]), 0);
    const o2Match = sum >= co2Values.length / 2 ? "0" : "1";
    co2Values = co2Values.filter((v) => v[i] === o2Match);
    if (co2Values.length === 1) {
      co2Rate = parseInt(co2Values[0], 2);
      break;
    }
  }

  return oxygenRate * co2Rate;
};
