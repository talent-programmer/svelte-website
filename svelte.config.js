import autoProcess from "svelte-preprocess";
import { mdsvex } from "mdsvex";
import remarkDocsSetImagePath from "./src/utils/remark-docs-set-image-path";

const mode = process.env.NODE_ENV;
const dev = mode === "development";

export const preprocess = {
  sourceMap: dev,
  ...autoProcess({ postcss: true, scss: true }),
  ...mdsvex({
    extensions: [".md"],
    remarkPlugins: [remarkDocsSetImagePath],
  }),
};
