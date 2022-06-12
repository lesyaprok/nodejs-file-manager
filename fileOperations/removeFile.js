import fs from "fs/promises";
import path from "path";
import { currentPath } from "../utils/currentPath.js";
import { OPERATION_FAILED } from "../messages/errorMessages.js";

export const removeFile = async (pathToFile) => {
  try {
    const fileToRemove = path.isAbsolute(pathToFile) ? pathToFile : path.resolve(currentPath, pathToFile); 
    await fs.rm(fileToRemove, { force: false })
  }
  catch {
    console.log(OPERATION_FAILED);
  }
};

