const { EleventyServerless } = require("@11ty/eleventy");
require("./eleventy-bundler-modules.js");

async function handler(event) {
  let elev = new EleventyServerless("search", {
    path: event.path,
    query: event.queryStringParameters,
    inputDir: "src",
    functionsDir: "./netlify/functions/",
  });
  admin.app().delete();
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
    admin.app().delete();
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

const { builder } = require("@netlify/functions");
exports.handler = builder(handler);
