import fs from "fs/promises";
import path from "path";
import { OPERATION_FAILED } from "../messages/errorMessages.js";
import { GET_CURRENT_PATH_INFO } from "../messages/messages.js";

export const listFiles = async (currentPath) => {
  try {
    const __dirname = path.resolve(currentPath);
    const files = await fs.readdir(__dirname);
    console.log(files);
  } catch {
    console.log(OPERATION_FAILED);
  } finally {
    console.log(GET_CURRENT_PATH_INFO(currentPath))
  }
} 