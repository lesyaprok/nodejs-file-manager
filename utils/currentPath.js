import { homedir } from "os";

export let currentPath = homedir();
process.chdir(currentPath);
export const changePath = (newPath) => {
  currentPath = newPath;
  process.chdir(currentPath);
}