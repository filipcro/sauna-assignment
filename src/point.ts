import { Direction } from "./types";

/**
 * Point on the chart. Top left corner will be (0,0).
 */
export type Point = {
  readonly x: number;
  readonly y: number;
};

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
