import visit from "unist-util-visit";

const visitor = (node) => {
  if (
    node.type === "image" &&
    node.url.startsWith("../../../static/images/docs/")
  ) {
    node.url = node.url.substring("../../../static".length);
  }
};

export default () => async (tree, vFile) => {
  if (!vFile.filename.startsWith("src/routes/docs/")) {
    return tree;
  }
  visit(tree, visitor);
  return tree;
};
