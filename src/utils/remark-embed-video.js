import visit from "unist-util-visit";

const youtubeEmbedRegex = new RegExp(`\(youtube\):\(\.\*\)`, "i");

const embedVideoHtml = (videoId, options) => `
<iframe
  title=""
  width="${options.width}"
  height="${options.height}"
  src="https://www.youtube.com/embed/${videoId}?rel=0"
  class="embedVideo-iframe"
  ${options.noIframeBorder ? 'style="border:0"' : ""}
  allowfullscreen
  sandbox="allow-same-origin allow-scripts allow-popups">
</iframe>`;

const visitor = (options) => (node) => {
  if (node.type === "inlineCode") {
    const regexResult = node.value.match(youtubeEmbedRegex);
    if (regexResult) {
      node.type = "html";
      node.value = embedVideoHtml(regexResult[2].trim(), options);
    }
  }
};

export default (options) => (tree) => {
  visit(tree, visitor(options));
  return tree;
};
