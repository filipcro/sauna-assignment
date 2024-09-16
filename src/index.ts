import { Chart } from "./chart";
import { collectLetters } from "./collect-letters";

const input = `
  @
  | +-C--+
  A |    |
  +---B--+
    |      x
    |      |
    +---D--+
`;

console.log(`
Map:

${input}
`);

try {
  const chart = new Chart(input);
  const { path, letters } = collectLetters(chart);

  console.log(`
Letters ${letters}
Path as characters ${path}
`);
} catch (e) {
  console.log(`Error: ${(e as Error).message}`);
}
