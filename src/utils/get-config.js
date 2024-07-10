require("dotenv").config();

/**
 * Function to get the config object
 * @returns {IConfig} - Config which consists of the following keys:
 */

const getConfig = () => {
  const config = {
    narakeetApiKey: process.env.NARAKEET_API_KEY,
  };

  return config;
};

module.exports.getConfig = getConfig;
