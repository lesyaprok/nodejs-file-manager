import fs from "fs/promises";
import path, { dirname } from "path";
import { OPERATION_FAILED } from "../messages/errorMessages.js";
import { currentPath } from "../utils/currentPath.js";

export const renameFile = async (pathToFile, newFileName) => {
  pathToFile = path.isAbsolute(pathToFile) ? pathToFile : path.resolve(currentPath, pathToFile); 
  const __dirname = dirname(pathToFile);
  const newPathToFile = path.join(__dirname, newFileName);
  let exist = false;

  try {
    await fs.access(newPathToFile, fs.F_OK);
    exist = true;
  } catch {
    exist = false;
  }

  try {
    if (!exist) {
      await fs.rename(pathToFile, newPathToFile);
    }
    else {
      console.log(OPERATION_FAILED);
    }
  } catch {
    console.log(OPERATION_FAILED);
  }
};
