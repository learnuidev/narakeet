const { getAudioResource } = require("./get-audio-resource");
const { listVoices } = require("./list-voices");
const { startGeneratingAudio } = require("./start-generating-audio");

const narakeetApi = ({ apiKey }) => {
  return {
    startGeneratingAudio: async ({ text, audio }) => {
      return startGeneratingAudio({ apiKey, text, audio });
    },
    getAudioResource,
    listVoices: async () => {
      return listVoices({ apiKey });
    },
  };
};

module.exports = {
  narakeetApi,
};
