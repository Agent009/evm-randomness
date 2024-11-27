import { randao } from "./lib";

randao().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
