import { currentPath, changePath } from "../utils/currentPath.js";
import path from "path";
import { GET_CURRENT_PATH_INFO } from "../messages/messages.js";
import { OPERATION_FAILED } from "../messages/errorMessages.js";

export const goUpper = async () => {
  try {
    const levelUpPath = path.resolve(currentPath, "..");
    process.chdir(levelUpPath);
    changePath(levelUpPath);
  } catch {
    console.log(OPERATION_FAILED);
  } finally {
    console.log(GET_CURRENT_PATH_INFO(currentPath))
  }
}