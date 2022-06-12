import fs from "fs";
import path from "path";
import { currentPath } from "../utils/currentPath.js";
import { OPERATION_FAILED } from "../messages/errorMessages.js";
import { GET_CURRENT_PATH_INFO } from "../messages/messages.js";

export const readFile = async (pathToFile) => {
  try {
    pathToFile = path.isAbsolute(pathToFile) ? pathToFile : path.resolve(currentPath, pathToFile);   
    
    const readableStream = fs.createReadStream(pathToFile, "utf-8");
    let content = "";
    
    readableStream.on('data', chunk => content += chunk);
    readableStream.on('end', () => {
      process.stdout.write(content);
    });
    readableStream.on("error", () => {
      console.log(OPERATION_FAILED);
    })

    readableStream.on("close", () => process.stdout.write("\n" + GET_CURRENT_PATH_INFO(currentPath)));
  } catch {
    console.log(OPERATION_FAILED);
  } 
};

