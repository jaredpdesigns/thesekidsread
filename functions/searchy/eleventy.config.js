const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");
const htmlmin = require("html-minifier");
const sass = require("sass");
const fs = require("fs-extra");

// Components
const Book = require("./src/_includes/book.js");
const Icon = require("./src/_includes/icon.js");

module.exports = (eleventyConfig) => {
  // Components
  eleventyConfig.addShortcode("Icon", Icon);
  eleventyConfig.addShortcode("Book", Book);

  // Serverless functions
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "searchy",
    inputDir: "./src",
    functionsDir: "./functions/",
    copy: ["src/_style.scss"],
  });

  // Filters
  eleventyConfig.addFilter("random", (arr) => {
    return arr[Math.floor(Math.random() * arr.length)].slug;
  });
  eleventyConfig.addFilter("related", (arr, authors, specific) => {
    let holder = [];
    authors.forEach((author) => {
      const result = arr.filter(
        (book) =>
          book.author.some((item) =>
            item.toLowerCase().includes(author.toLowerCase())
          ) && book.title !== specific
      );
      holder.push(result);
    });
    let cleaned = holder.flat();
    let unique = [...new Set(cleaned)];
    return unique;
  });
  eleventyConfig.addFilter("search", (query, arr) => {
    if (query) {
      const items = Object.values(arr).flat();
      return items.filter(
        (book) =>
          book.author.some((item) =>
            item.toLowerCase().includes(query.toLowerCase())
          ) ||
          book.description.toLowerCase().includes(query.toLowerCase()) ||
          book.title.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      return [];
    }
  });

  //Build Stuff
  eleventyConfig.addPassthroughCopy({
    "./static": "/",
  });

  // Compile SCSS before a build
  eleventyConfig.on("beforeBuild", () => {
    let result = sass.renderSync({
      file: "./src/_style.scss",
      sourceMap: false,
      outputStyle: "compressed",
    });
    fs.ensureDirSync("_site/css/");
    fs.writeFile("_site/css/style.css", result.css, (err) => {
      if (err) throw err;
    });
  });

  // 404 handling
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, bs) {
        bs.addMiddleware("*", (req, res) => {
          const content_404 = fs.readFileSync("_site/404.html");
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
          res.write(content_404);
          res.end();
        });
      },
    },
  });

  // HTML minification
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });

  return {
    dir: {
      input: "./src",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
