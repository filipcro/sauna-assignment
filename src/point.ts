import { Direction } from "./types";

/**
 * Point on the chart. Top left corner will be (0,0).
 */
export class Point {
  readonly x: number;
  readonly y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  isEqual(point: Point) {
    return this.x === point.x && this.y === point.y;
  }

  getNeighbour(direction: Direction) {
    switch (direction) {
      case Direction.Up:
        return new Point(this.x, this.y - 1);
      case Direction.Down:
        return new Point(this.x, this.y + 1);
      case Direction.Left:
        return new Point(this.x - 1, this.y);
      case Direction.Right:
        return new Point(this.x + 1, this.y);
    }
  }
}
