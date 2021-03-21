import visit from "unist-util-visit";

const imagesRelativeUrlPattern = "../static/images/";

const visitor = (node) => {
  if (node.type === "image" && node.url.indexOf("../static/images/") > 0) {
    node.url = node.url.substring(
      node.url.indexOf(imagesRelativeUrlPattern) + "../static".length
    );
  }
};

export default () => async (tree, vFile) => {
  if (!vFile.filename.startsWith("src/routes/docs/")) {
    return tree;
  }
  visit(tree, visitor);
  return tree;
};
