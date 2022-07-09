import path from "path";
import glob from "glob";

const contentFolder = path.resolve(process.cwd(), "content");

export function getPagesList(): Array<Array<string>> {
  const files = glob.sync("**/*.dy", {
    cwd: contentFolder,
    nodir: true,
  });
  const pages = files.map((p) => p.slice(0, -3).split("/"));
  return pages;
}
