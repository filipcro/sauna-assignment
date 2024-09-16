/**
 * Point on the chart. Top left corner will be (0,0).
 */
export type Point = {
  readonly x: number;
  readonly y: number;
};

export enum Direction {
  Up,
  Down,
  Left,
  Right,
}

export enum FieldType {
  Empty,
  Start,
  End,
  Horizontal,
  Vertical,
  Turn,
  Letter,
}
