import { OPERATION_FAILED } from "../messages/errorMessages.js";
import { currentPath } from "../utils/currentPath.js";
import fs from "fs/promises";
import path from "path";

export const moveFile = async (pathToFile, destination) => {
  pathToFile = path.isAbsolute(pathToFile) ? pathToFile : path.resolve(currentPath, pathToFile);   
  const __filename = path.basename(pathToFile);
  destination = path.isAbsolute(destination) ?
    path.resolve(destination, __filename) :
    path.resolve(currentPath, destination, __filename);
  try {
    await fs.rename(pathToFile, destination)
  }
   catch {
    console.log(OPERATION_FAILED);
  }
}