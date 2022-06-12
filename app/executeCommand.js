import { currentPath } from "../utils/currentPath.js";
import { INVALID_INPUT, OPERATION_FAILED } from "../messages/errorMessages.js";
import { changeDirectory } from "../navigation/changeDirectory.js";
import { goUpper } from "../navigation/goUpper.js";
import { listFiles } from "../navigation/listFiles.js";
import { readFile } from "../fileOperations/readFile.js";
import { createFile } from "../fileOperations/createFile.js";
import { renameFile } from "../fileOperations/renameFile.js";
import { copyFile } from "../fileOperations/copyFile.js";
import { moveFile } from "../fileOperations/moveFile.js";
import { removeFile } from "../fileOperations/removeFile.js";
import { GET_CURRENT_PATH_INFO } from "../messages/messages.js";

export const executeCommand = (command) => {
  try {
    command = command.trim().split(" ").filter(e => e);

    switch (command[0]) {
      case "up":
        goUpper(currentPath);
        break;
      case "cd":
        changeDirectory(command[1]);
        break;
      case "ls":
        listFiles(currentPath);
        break;
      case "cat":
        readFile(command[1]);
        break;
      case "add":
        createFile(command[1]);
        break;
      case "rn":
        (command[1], command[2]) ? renameFile(command[1], command[2]) : console.log(OPERATION_FAILED);
        break;
      case "cp":
        (command[1], command[2]) ? copyFile(command[1], command[2]) : console.log(OPERATION_FAILED);
        break;
      case "mv":
        (command[1], command[2]) ? moveFile(command[1], command[2]) : console.log(OPERATION_FAILED);
        break;
      case "rm":
        removeFile(command[1]);
        break;
      // case "os --EOL":
      //   os_eol();
      //   break;
      // case "os --cpus":
      //   os_cpus();
      //   break;
      // case "os --homedir":
      //   os_homedir();
      //   break;
      // case "os --username":
      //   os_username();
      //   break;
      // case "os --architecture":
      //   os_arch();
      //   break;
      // case "hash":
      //   hash();
      //   break;
      // case "compress":
      //   compress();
      //   break;
      // case "decompress":
      //   decompress();
      //   break;

      default:
        console.log(INVALID_INPUT)
    }
  }
  catch {
    console.log(INVALID_INPUT);
  }
}
