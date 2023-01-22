import { host } from "./host.js";

export const getTranscriptions = async (userId) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: userId,
    }),
  };
  const res = (await fetch(`${host}/user-convo-info`, requestOptions)).json();
  return res;
};
