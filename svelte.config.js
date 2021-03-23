import autoProcess from "svelte-preprocess";
import { mdsvex } from "mdsvex";
import remarkSetImagePath from "./src/utils/remark-set-image-path";
import remarkEmbedVideo from "./src/utils/remark-embed-video";

const mode = process.env.NODE_ENV;
const dev = mode === "development";

export const preprocess = {
  sourceMap: dev,
  ...autoProcess({ postcss: true, scss: true }),
  ...mdsvex({
    extensions: [".md"],
    layout: {
      blog: "./src/components/blog/blog-content-layout.svelte",
      docs: "./src/components/docs/docs-content-layout.svelte",
    },
    remarkPlugins: [
      remarkSetImagePath,
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
