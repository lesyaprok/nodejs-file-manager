import fs from "fs/promises";
import path from "path";
import { currentPath } from "../utils/currentPath.js";
import { OPERATION_FAILED } from "../messages/errorMessages.js";

export const copyFile = async (pathToFile, destination) => {
  pathToFile = path.isAbsolute(pathToFile) ? pathToFile : path.resolve(currentPath, pathToFile); 
  const __filename = path.basename(pathToFile);
  destination = path.isAbsolute(destination) ? destination : path.resolve(currentPath, destination, __filename);
  
  try {
    await fs.copyFile(pathToFile, destination, fs.COPYFILE_EXCL)
  } catch (err) {
    console.log(OPERATION_FAILED)
  }
};
