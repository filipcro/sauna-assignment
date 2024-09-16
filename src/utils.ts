import { Direction, FieldType, Point } from "./types";

export function arePointsEqual(pointA: Point, pointB: Point) {
  return pointA.x === pointB.x && pointA.y === pointB.y;
}

export function getNeighbouringPoint(point: Point, direction: Direction) {
  switch (direction) {
    case Direction.Up:
      return { x: point.x, y: point.y - 1 };
    case Direction.Down:
      return { x: point.x, y: point.y + 1 };
    case Direction.Left:
      return { x: point.x - 1, y: point.y };
    case Direction.Right:
      return { x: point.x + 1, y: point.y };
  }
}

export const characterToField = (character: string) => {
  switch (character) {
    case " ":
      return FieldType.Empty;
    case "@":
      return FieldType.Start;
    case "x":
      return FieldType.End;
    case "-":
      return FieldType.Horizontal;
    case "|":
      return FieldType.Vertical;
    case "+":
      return FieldType.Turn;
    default:
      return FieldType.Letter;
  }
};
