import { arePointsEqual, getNeighbouringPoint } from "./point";
import { Direction } from "./types";

describe("Point utils", () => {
  it("should compare points", () => {
    const pointA = { x: 1, y: 2 };
    const pointB = { x: 2, y: 1 };
    const pointC = { x: 1, y: 2 };

    expect(arePointsEqual(pointA, pointB)).toBe(false);
    expect(arePointsEqual(pointA, pointC)).toBe(true);
  });

  it.each([
    [Direction.Up, { x: 1, y: 4 }],
    [Direction.Down, { x: 1, y: 6 }],
    [Direction.Left, { x: 0, y: 5 }],
    [Direction.Right, { x: 2, y: 5 }],
  ])("should find neighbour", (direction, point) => {
    const initial = { x: 1, y: 5 };

    expect(getNeighbouringPoint(initial, direction)).toMatchObject(point);
  });
});
