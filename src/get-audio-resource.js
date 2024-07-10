const getAudioResource = async ({ statusUrl }) => {
  const resp = await fetch(statusUrl);

  return resp.json();
};

module.exports.getAudioResource = getAudioResource;

const exampleInput = {
  requestId: "740ef44e-2d56-4029-9958-a809fd4ba090",
  taskId: "3bf5f12c-6fa1-44cc-8181-cd857ebd3905",
  statusUrl:
    "https://nkprod-coredatastack-pa7jx42xiwhf-tasksbucket-13qb6gn1l5ooi.s3.us-east-1.amazonaws.com/3bf5f12c-6fa1-44cc-8181-cd857ebd3905/status?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAUENQVYXO364OQ57F%2F20240710%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240710T020538Z&X-Amz-Expires=86400&X-Amz-Signature=3de5b47e71ff49ea9b6bd5dda13357ee8de036d4380d03d6cc11ffb1551d67f4&X-Amz-SignedHeaders=host&x-id=GetObject",
};

const exampleResponse = {
  percent: 100,
  finished: true,
  succeeded: true,
  message: "Generated audio",
  result:
    "https://nkprod-coredatastack-pa7jx42xiwhf-tasksbucket-13qb6gn1l5ooi.s3.us-east-1.amazonaws.com/3bf5f12c-6fa1-44cc-8181-cd857ebd3905/result.m4a?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAUENQVYXORYD4N3EU%2F20240710%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240710T020539Z&X-Amz-Expires=86400&X-Amz-Signature=546f9b8135ebfe55d233ad0b72cef021cee380cc4ed06616ed0a4fcc74743254&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%3D%22Hi%2520there%2520from%2520the%2520AP.m4a%22&x-id=GetObject",
  durationInSeconds: 2,
};

const exampleResponse2 = {
  percent: 100,
  finished: true,
  succeeded: true,
  message: "Generated audio",
  result:
    "https://nkprod-coredatastack-pa7jx42xiwhf-tasksbucket-13qb6gn1l5ooi.s3.us-east-1.amazonaws.com/3bf5f12c-6fa1-44cc-8181-cd857ebd3905/result.m4a?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAUENQVYXORYD4N3EU%2F20240710%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240710T020539Z&X-Amz-Expires=86400&X-Amz-Signature=546f9b8135ebfe55d233ad0b72cef021cee380cc4ed06616ed0a4fcc74743254&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%3D%22Hi%2520there%2520from%2520the%2520AP.m4a%22&x-id=GetObject",
  durationInSeconds: 2,
};

// getAudioResource(exampleInput).then((resp) => {
//   console.log("resp", resp);
// });
