import autoProcess from "svelte-preprocess";
import { mdsvex } from "mdsvex";
import remarkDocsSetImagePath from "./src/utils/remark-docs-set-image-path";
import remarkEmbedVideo from "./src/utils/remark-embed-video";

const mode = process.env.NODE_ENV;
const dev = mode === "development";

export const preprocess = {
  sourceMap: dev,
  ...autoProcess({ postcss: true, scss: true }),
  ...mdsvex({
    extensions: [".md"],
    layout: {
      docs: "./src/components/docs/content-layout.svelte",
    },
    remarkPlugins: [
      remarkDocsSetImagePath,
      [
        remarkEmbedVideo,
        {
          width: 800,
          height: 400,
          noIframeBorder: true,
        },
      ],
    ],
  }),
};
