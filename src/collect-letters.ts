import { Chart } from "./chart";
import { pathFinder } from "./path-finder";
import { arePointsEqual, Point } from "./point";
import { FieldType } from "./types";

export function collectLetters(chart: Chart) {
  const pathCharacters: string[] = [];
  const letters: string[] = [];
  const letterPoints: Point[] = [];

  for (const point of pathFinder(chart)) {
    pathCharacters.push(chart.getCharacter(point));

    if (chart.getField(point) === FieldType.Letter) {
      const collected = letterPoints.some((p) => arePointsEqual(p, point));

      if (!collected) {
        letters.push(chart.getCharacter(point));
        letterPoints.push(point);
      }
    }
  }

  return {
    path: pathCharacters.join(""),
    letters: letters.join(""),
  };
}
