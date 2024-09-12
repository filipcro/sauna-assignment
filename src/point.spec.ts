import { Point } from "./point";
import { Direction } from "./types";

describe("Point", () => {
  it("should compare points", () => {
    const pointA = new Point(1, 2);
    const pointB = new Point(2, 1);
    const pointC = new Point(1, 2);

    expect(pointA.isEqual(pointB)).toBe(false);
    expect(pointA.isEqual(pointC)).toBe(true);
  });

  it.each([
    [Direction.Up, new Point(1, 4)],
    [Direction.Down, new Point(1, 6)],
    [Direction.Left, new Point(0, 5)],
    [Direction.Right, new Point(2, 5)],
  ])("should find neighbour", (direction, point) => {
    const initial = new Point(1, 5);
    expect(initial.getNeighbour(direction)).toMatchObject(point);
  });
});
