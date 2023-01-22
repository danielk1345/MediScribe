import { host } from "./host.js";

export const setTranscript = async (userId, transcript, title, name) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: userId,
      transcript: transcript,
      title: title,
      name: name,
    }),
  };

  return await fetch(`${host}/set-convo`, requestOptions);
};
