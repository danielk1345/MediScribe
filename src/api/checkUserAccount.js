import { host } from "./host.js";

export const checkUserAccount = async (userId) => {
  const requestOptions = (requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: userId,
    }),
  });

  return await fetch(`${host}/check-account`, requestOptions); // create account if user does not yet have one
};
