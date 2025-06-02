module.exports = function (eleventyConfig) {
  // Copy everything from `src/assets/` into `_site/assets/`
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};

