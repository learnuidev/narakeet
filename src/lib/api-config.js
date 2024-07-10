require("dotenv").config();

const apiConfig = {
  narakeetApiKey: process.env.NARAKEET_API_KEY,
  narakeetApiUrl: `https://api.narakeet.com`,
};

module.exports.apiConfig = apiConfig;
