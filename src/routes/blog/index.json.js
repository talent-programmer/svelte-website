import fs from "fs";
import frontMatter from "front-matter";

const BLOG_POSTS_BASE_DIR = "./src/routes/blog";

const generatePost = (dirent) => {
  const postContent = fs.readFileSync(`${BLOG_POSTS_BASE_DIR}/${dirent.name}`, {
    encoding: "utf-8",
  });
  const postFrontMatter = frontMatter(postContent);
  return postFrontMatter.attributes;
};

const posts = fs
  .readdirSync(BLOG_POSTS_BASE_DIR, { withFileTypes: true })
  .filter((dirent) => dirent.isFile() && dirent.name.endsWith(".md"))
  .map(generatePost);

export const get = (_req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  res.end(JSON.stringify(posts));
};
