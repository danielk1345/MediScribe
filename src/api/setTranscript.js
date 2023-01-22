import { host } from "./host.js";

export const setTranscript = async (
  userId,
  conversationInfo,
  title,
  doctorName
) => {
  const requestOptions = (requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: userId,
      conversationInfo: conversationInfo,
      title: title,
      doctorName: doctorName,
    }),
  });

  return await fetch(`${host}/set-convo`, requestOptions);
};
