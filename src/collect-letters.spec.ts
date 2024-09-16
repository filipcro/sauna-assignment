import { collectLetters } from "./collect-letters";
import { Chart } from "./chart";

describe("Examples from the Code Challenge", () => {
  it("should go straight through intersections", () => {
    const chart = new Chart(`
      @
      | +-C--+
      A |    |
      +---B--+
        |      x
        |      |
        +---D--+
    `);

    const { path, letters } = collectLetters(chart);
    expect(letters).toBe("ABCD");
    expect(path).toBe("@|A+---B--+|+--C-+|-||+---D--+|x");
  });

  it("should find turns under letters", () => {
    const chart = new Chart(`
      @---A---+
              |
      x-B-+   |
          |   |
          +---C
    `);

    const { path, letters } = collectLetters(chart);
    expect(letters).toBe("ACB");
    expect(path).toBe("@---A---+|||C---+|+-B-x");
  });

  it("should collect letters only once", () => {
    const chart = new Chart(`
          +-O-N-+
          |     |
          |   +-I-+
      @-G-O-+ | | |
          | | +-+ E
          +-+     S
                  |
                  x
    `);

    const { path, letters } = collectLetters(chart);
    expect(letters).toBe("GOONIES");
    expect(path).toBe("@-G-O-+|+-+|O||+-O-N-+|I|+-+|+-I-+|ES|x");
  });

  it("should keep direction, even in a compact space", () => {
    const chart = new Chart(`
       +-L-+
       |  +A-+
      @B+ ++ H
       ++    x
    `);

    const { path, letters } = collectLetters(chart);
    expect(letters).toBe("BLAH");
    expect(path).toBe("@B+++B|+-L-+A+++A-+Hx");
  });

  it("should ignore stuff after the end", () => {
    const chart = new Chart(`
      @-A--+
           |
           +-B--x-C--D
    `);

    const { path, letters } = collectLetters(chart);
    expect(letters).toBe("AB");
    expect(path).toBe("@-A--+|+-B--x");
  });
});
