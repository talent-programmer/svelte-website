const visit = require("unist-util-visit");

const imagesRelativeUrlPattern = "../static/images/";

const visitor = (node) => {
  if (node.type === "image" && node.url.indexOf(imagesRelativeUrlPattern) > 0) {
    node.url = node.url.substring(
      node.url.indexOf(imagesRelativeUrlPattern) + "../static".length
    );
  }
};

module.exports = () => async (tree, vFile) => {
  if (
    vFile.filename.startsWith("src/routes/docs/") ||
    vFile.filename.startsWith("src/routes/blog/")
  ) {
    visit(tree, visitor);
  }
  return tree;
};
