const { apiConfig } = require("./lib/api-config");

/**
 * Function to start generating text to audio
 * Black-Scholes pricing model
 * @param   {string} text
 * @param   {number} voice - Option strike price
 * @returns {string} requestId - The ID of the request
 * @returns {string} taskId - The ID of the Task
 * @returns {string} statusUrl - The URL which will then get used to poll for AWS Bucket
 *
 */

const startGeneratingAudio = async ({ apiKey, text, voice, speed, volume }) => {
  const voiceSpeed = speed || 1;
  const voiceVolume = volume || "standard";
  const resp = await fetch(
    `${apiConfig.narakeetApiUrl}/text-to-speech/m4a?voice=${voice}&voice-speed=${voiceSpeed}&voice-volume=${voiceVolume}`,
    {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "content-type": "text/plain",
      },
      body: text,
    }
  );

  return resp.json();
};

const exampleResp = {
  requestId: "740ef44e-2d56-4029-9958-a809fd4ba090",
  taskId: "3bf5f12c-6fa1-44cc-8181-cd857ebd3905",
  statusUrl:
    "https://nkprod-coredatastack-pa7jx42xiwhf-tasksbucket-13qb6gn1l5ooi.s3.us-east-1.amazonaws.com/3bf5f12c-6fa1-44cc-8181-cd857ebd3905/status?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAUENQVYXO364OQ57F%2F20240710%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240710T020538Z&X-Amz-Expires=86400&X-Amz-Signature=3de5b47e71ff49ea9b6bd5dda13357ee8de036d4380d03d6cc11ffb1551d67f4&X-Amz-SignedHeaders=host&x-id=GetObject",
};

// startGeneratingAudio({
//   apiKey: apiConfig.narakeetApiKey,
//   text: "hello world",
//   voice: "mickey",
// });

module.exports.startGeneratingAudio = startGeneratingAudio;
