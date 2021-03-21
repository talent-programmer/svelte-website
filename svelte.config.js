import autoProcess from "svelte-preprocess";
import { mdsvex } from "mdsvex";
import remarkCopyLinkedFiles from "remark-copy-linked-files";

const mode = process.env.NODE_ENV;
const dev = mode === "development";

export const preprocess = {
  sourceMap: dev,
  ...autoProcess({ postcss: true, scss: true }),
  ...mdsvex({
    extensions: [".md"],
    remarkPlugins: [
      [
        remarkCopyLinkedFiles,
        {
          destinationDir: "static/images/docs",
          staticPath: "/images/docs",
        },
      ],
    ],
  }),
};
