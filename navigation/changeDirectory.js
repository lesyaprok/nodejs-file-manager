import { changePath, currentPath } from "../utils/currentPath.js";
import { cwd, chdir } from 'node:process';
import { OPERATION_FAILED } from "../messages/errorMessages.js";
import { GET_CURRENT_PATH_INFO } from "../messages/messages.js";

export const changeDirectory = async (destination) => { 
  try {
    chdir(destination);
    changePath(cwd());
  } catch (err) {
    console.error(`${OPERATION_FAILED}. ${err.message}`);
  } finally {
    console.log(GET_CURRENT_PATH_INFO(currentPath))
  }
}
