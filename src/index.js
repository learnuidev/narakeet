const { getAudioResource } = require("./get-audio-resource");
const { listVoices } = require("./list-voices");
const { startGeneratingAudio } = require("./start-generating-audio");

module.exports = {
  startGeneratingAudio,
  getAudioResource,
  listVoices,
};
