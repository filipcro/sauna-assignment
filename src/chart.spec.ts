import { Chart } from "./chart";
import { FieldType } from "./types";

describe("Creating of the chart", () => {
  it("should create chart", () => {
    const chart = new Chart(
      "@---A---+ \n" +
        "        | \n" +
        "x-B-+   C \n" +
        "    |   | \n" +
        "    +---+"
    );

    expect(chart.getField({ x: 4, y: 0 })).toBe(FieldType.Letter);
    expect(chart.getCharacter({ x: 4, y: 0 })).toBe("A");

    expect(chart.getField({ x: 0, y: 2 })).toBe(FieldType.End);
    expect(chart.getCharacter({ x: 0, y: 2 })).toBe("x");
  });

  it("should return Empty for undefined points", () => {
    const chart = new Chart(`
      x---A---+
              |
      +-B-@   C
      |       |
      +-------+
    `);

    expect(chart.getField({ x: 0, y: -100 })).toBe(FieldType.Empty);
    expect(chart.getField({ x: 100, y: 100 })).toBe(FieldType.Empty);
  });
});

describe("Starting point", () => {
  it("should find starting point", () => {
    const chart = new Chart(`
      x---A---+
              |
      +-B-@   C
      |       |
      +-------+
    `);

    expect(chart.getField(chart.startingPoint)).toBe(FieldType.Start);
  });

  it("should throw if starting point doesn't exist", () => {
    expect(() => {
      new Chart(`
           -A---+
                |
        x-B-+   C
            |   |
            +---+
      `);
    }).toThrow();
  });

  it("should throw for multiple starting points", () => {
    expect(() => {
      new Chart(`
         @--A-@-+
                |
        x-B-+   C
            |   |
            +---+ 
      `);
    }).toThrow();

    expect(() => {
      new Chart(`
        @--A---+
               |
               C
               x
           @-B-+
      `);
    }).toThrow();

    expect(() => {
      new Chart(`
         @--A--x

        x-B-+
            |
            @
      `);
    }).toThrow();
  });
});
