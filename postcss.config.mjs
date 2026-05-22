// postcss.config.mjs
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {}, // Ini yang diubah dari sebelumnya hanya "tailwindcss"
  },
};

export default config;