export const sendWelcomeEmail = ({  email }) => {
  return fetch(`/api/emails/welcome`, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
 
      email,
    }),
  })
    .then((res) => {
      console.log("Fetch: ", res);
      return { sent: true };
    })
    .catch((error) => {
      console.error("Error in fetch: ", error);
      return { sent: false };
    });
};
