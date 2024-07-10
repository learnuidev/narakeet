const { apiConfig } = require("./lib/api-config");

/**
 * Function to return all the voices supported by narakeet
 */

const listVoices = async ({ apiKey }) => {
  const resp = await fetch(`${apiConfig.narakeetApiUrl}/voices`, {
    method: "GET",
    headers: {
      "x-api-key": apiKey,
    },
  });

  return resp.json();
};

// Please see src/lib/voices-list.js for the full list (July 9th, 2024)
const exampleResponse = [
  {
    name: "abril",
    language: "Catalan",
    languageCode: "ca-ES",
    styles: ["literal", "normal", "ipa"],
  },
];

module.exports.listVoices = listVoices;
