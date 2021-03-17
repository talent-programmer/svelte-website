import autoProcess from 'svelte-preprocess';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

export const preprocess = {
  sourceMap: dev,
  ...autoProcess({ postcss: true })
};
