import {
  arePointsEqual,
  characterToField,
  getNeighbouringPoint,
} from "./utils";
import { Direction, FieldType } from "./types";

describe("Points utils", () => {
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

describe("FieldType utils", () => {
  it("should turn character into FieldType", () => {
    expect(characterToField(" ")).toBe(FieldType.Empty);
    expect(characterToField("@")).toBe(FieldType.Start);
    expect(characterToField("x")).toBe(FieldType.End);
    expect(characterToField("-")).toBe(FieldType.Horizontal);
    expect(characterToField("|")).toBe(FieldType.Vertical);
    expect(characterToField("+")).toBe(FieldType.Turn);
    expect(characterToField("A")).toBe(FieldType.Letter);
    expect(characterToField("B")).toBe(FieldType.Letter);
  });
});
