const { EleventyServerless } = require("@11ty/eleventy");

require("./eleventy-bundler-modules.js");

async function handler(event) {
  let elev = new EleventyServerless("search", {
    path: event.path,
    query: event.queryStringParameters,
    inputDir: "./src/site/",
    functionsDir: "./functions/",
    copy: ["src/scss/"],
  });
  try {
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/html; charset=UTF-8",
      },
      body: await elev.render(),
    };
  } catch (error) {
    if (elev.isServerlessUrl(event.path)) {
      console.log("Serverless Error:", error);
    }

    return {
      statusCode: error.httpStatusCode || 500,
      body: JSON.stringify(
        {
          error: error.message,
        },
        null,
        2
      ),
    };
  }
}

// exports.handler = handler; Use this if you *aren't* using Netlify functions apparently

const { builder } = require("@netlify/functions");
exports.handler = builder(handler);
