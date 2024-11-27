import * as readline from "readline";
import { blockHashRandomness, tossCoin } from "./lib";

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question(
    "Pick an operation: \n Options: \n [1]: Random from block hash \n [2]: Toss a coin\n",
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
