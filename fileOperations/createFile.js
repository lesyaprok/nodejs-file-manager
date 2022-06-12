import { writeFile } from "fs/promises";
import path from "path";
import { currentPath } from "../utils/currentPath.js";
import { OPERATION_FAILED } from "../messages/errorMessages.js";
import { GET_CURRENT_PATH_INFO } from "../messages/messages.js";

export const createFile = async (fileName) => {
  try {
    const newFileName = path.join(currentPath, fileName);
    await writeFile(newFileName, "", { flag: "wx" });
  }
  catch (e) {
    console.log(OPERATION_FAILED);
  }
  finally {
    console.log(GET_CURRENT_PATH_INFO(currentPath))
  }
}

