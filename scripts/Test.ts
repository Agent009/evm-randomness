import * as readline from "readline";
import { blockHashRandomness, tossCoin } from "./NotQuiteRandom/Test";
import { randao } from "./Random/Test";
import { randomSealedSeed, sealedSeed, signature } from "./PseudoRandom/Test";

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question(
    "Pick an operation: \n Options: \n [1]: Random from block hash \n [2]: Toss a coin \n [3]: Message signature \n [4]: Random from a sealed seed \n [5]: Random from block hash plus a sealed seed \n [6]: Random from randao \n",
    (answer) => {
      console.log(`You picked: ${answer}`);
      const option = Number(answer);
      switch (option) {
        case 1:
          blockHashRandomness();
          break;
        case 2:
          tossCoin();
          break;
        case 3:
          signature();
          break;
        case 4:
          sealedSeed();
          break;
        case 5:
          randomSealedSeed();
          break;
        case 6:
          randao();
          break;
        default:
          console.log("Invalid");
          break;
      }
      rl.close();
    }
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
