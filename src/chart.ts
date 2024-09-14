import { Point } from "./point";
import { FieldType } from "./types";

const characterToField = (character: string) => {
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
      return FieldType.Cross;
    default:
      return FieldType.Letter;
  }
};

export class Chart {
  private chart: string[];
  readonly startingPoint: Point;

  constructor(chart: string) {
    this.chart = chart.split("\n");

    const startingPoints = [] as Point[];

    this.chart.forEach((row, y) => {
      for (let x = 0; x <= row.length; x++) {
        if (row[x] === "@") {
          startingPoints.push({ x, y });
        }
      }
    });

    if (startingPoints.length === 0) {
      throw new Error("No starting point");
    }

    if (startingPoints.length > 1) {
      throw new Error("Multiple starting points");
    }

    this.startingPoint = startingPoints[0];
  }

  getCharacter(point: Point) {
    if (point.y < 0 || point.y >= this.chart.length) {
      return " ";
    }

    const row = this.chart[point.y];

    if (point.x < 0 || point.x >= row.length) {
      return " ";
    }

    return row[point.x];
  }

  getField(point: Point) {
    return characterToField(this.getCharacter(point));
  }
}
