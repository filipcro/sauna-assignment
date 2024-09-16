import { Chart } from "./chart";
import { pathFinder } from "./path-finder";

describe("Path finder", () => {
  it("should find simple path", () => {
    const chart = new Chart("@--x");

    expect([...pathFinder(chart)]).toMatchObject([
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 3, y: 0 },
    ]);
  });

  it("should handle turns", () => {
    const chart = new Chart(`\
@--+
   |
   x
`);

    expect([...pathFinder(chart)]).toMatchObject([
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 3, y: 0 },
      { x: 3, y: 1 },
      { x: 3, y: 2 },
    ]);
  });

  it("should handle turns under letters", () => {
    const chart = new Chart(`\
@--A
   |
   x
`);

    expect([...pathFinder(chart)]).toMatchObject([
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 3, y: 0 },
      { x: 3, y: 1 },
      { x: 3, y: 2 },
    ]);
  });
});

describe("Path finder with broken path", () => {
  it("should throw if end character is missing", () => {
    const chart = new Chart(`
      @--A---+
             |
       B-+   C
         |   |
         +---+
    `);

    expect(() => [...pathFinder(chart)]).toThrow();
  });

  it("should throw on broken path", () => {
    const chart = new Chart(`
      @--A-+
           |
            
           B-x
    `);

    expect(() => [...pathFinder(chart)]).toThrow();
  });

  it("should throw on path fork", () => {
    const chart = new Chart(`
           x-B
             |
      @--A---+
             |
        x+   C
         |   |
         +---+
    `);

    expect(() => [...pathFinder(chart)]).toThrow();
  });

  it("should throw on fake turn", () => {
    const chart = new Chart("@-B-+-A-x");

    expect(() => [...pathFinder(chart)]).toThrow();
  });

  it("should throw on multiple starting paths", () => {
    const chart = new Chart("x-B-@-A-x");

    expect(() => [...pathFinder(chart)]).toThrow();
  });
});
