import { Chart } from "./chart";
import { getNeighbouringPoint } from "./utils";
import { Direction, FieldType, Point } from "./types";

export function* pathFinder(chart: Chart) {
  let point = chart.startingPoint;
  yield point;

  let direction = pickDirection(chart, chart.startingPoint, [
    Direction.Up,
    Direction.Down,
    Direction.Left,
    Direction.Right,
  ]);

  while (true) {
    point = getNeighbouringPoint(point, direction);
    const fieldType = chart.getField(point);

    if (fieldType === FieldType.Empty) {
      throw new Error("Missing path");
    }

    yield point;

    if (fieldType === FieldType.End) {
      break;
    }

    const isTurn =
      fieldType === FieldType.Turn ||
      (fieldType === FieldType.Letter &&
        !canGoInDirection(chart, point, direction));

    if (isTurn) {
      const isVertical = [Direction.Up, Direction.Down].includes(direction);

      direction = pickDirection(
        chart,
        point,
        isVertical
          ? [Direction.Left, Direction.Right]
          : [Direction.Up, Direction.Down]
      );
    }
  }
}

function canGoInDirection(chart: Chart, point: Point, direction: Direction) {
  const nextPoint = getNeighbouringPoint(point, direction);
  const fieldType = chart.getField(nextPoint);
  return fieldType !== FieldType.Empty;
}

function pickDirection(chart: Chart, point: Point, directions: Direction[]) {
  const possibleDirections = directions.filter((d) =>
    canGoInDirection(chart, point, d)
  );

  if (possibleDirections.length === 0) {
    throw new Error("No possible direction");
  }

  if (possibleDirections.length > 1) {
    throw new Error("Multiple possible direction");
  }

  return possibleDirections[0];
}
