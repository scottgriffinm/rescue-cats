import { LEVELS } from "./levels";
import { initialDirs, simulate } from "./simulate";
import { minSolve } from "./solve";

for (const level of LEVELS) {
  const untouched = simulate(level, initialDirs(level)).status;
  const solved = minSolve(level);
  console.log(
    `#${level.number} ${level.id} · untouched=${untouched} · ${
      solved.solvable ? `minRewires=${solved.minMoves}/${level.moves}` : "UNSOLVABLE"
    }`,
  );
  if (untouched === "win") {
    throw new Error(`${level.id} is already solved`);
  }
  if (!solved.solvable) {
    throw new Error(`${level.id} cannot be solved in ${level.moves} rewires`);
  }
}

console.log("All levels ok");
