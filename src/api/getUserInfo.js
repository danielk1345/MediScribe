import { host } from "./host.js";

export const getUserInfo = async (userId) => {
  const requestOptions = (requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: userId,
    }),
  });

  return await fetch(`${host}/user-info`, requestOptions);
};
