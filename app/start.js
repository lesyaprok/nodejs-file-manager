import { currentPath } from "../utils/currentPath.js";
import * as readline from 'node:readline';
import { executeCommand } from "./executeCommand.js";
import { BEFORE_CLOSE_MESSAGE, GET_CURRENT_PATH_INFO, WELCOME_MESSAGE } from "../messages/messages.js";

export const start = async () => {
  const args = process.argv.slice(2)[0];
  const userName = args.split("=")[1];

  console.log(WELCOME_MESSAGE(userName));
  console.log(GET_CURRENT_PATH_INFO(currentPath));

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.prompt(true);
  process.on("exit", () => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log(BEFORE_CLOSE_MESSAGE(userName));
  }
  )
  rl.on("line", input => {
    if (input === ".exit") {
      process.stdin.unref();
    }
    else {
      executeCommand(input);
      rl.prompt(true);
    }
  });

  // const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
  // try {
  //   const command = await prompt("");
  //   executeCommand(command);
  // } catch(e) {
  //   console.log(e)
  // }
}
