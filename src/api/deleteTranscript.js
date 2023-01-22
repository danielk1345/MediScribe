import { host } from "./host.js";

export const deleteTranscript = async (transcriptId, userId) => {
  const requestOptions = (requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      transcriptId: transcriptId,
      userId: userId,
    }),
  });

  return await fetch(`${host}/delete-transcript`, requestOptions);
};
