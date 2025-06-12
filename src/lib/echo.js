import Echo from "laravel-echo";
import Pusher from "pusher-js";
import axios from "axios";

window.Pusher = Pusher;

const echo = new Echo({
  broadcaster: "reverb",
  key: "5bcus2pmxhiwlo28uzz3",
  wsHost: "reverb.softvencefsd.xyz",
  wsPort: 8082,
  wssPort: 443,
  forceTLS: true,
  disableStats: true,
  enabledTransports: ["ws", "wss"],
  authEndpoint: `${import.meta.env.VITE_API_URL}/broadcasting/auth`,
  authorizer: (channel) => {
    const token = localStorage.getItem("accessToken");

    return {
      authorize: (socketId, callback) => {
        axios
          .post(
            `${import.meta.env.VITE_API_URL}/broadcasting/auth`,
            {
              socket_id: socketId,
              channel_name: channel.name,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
              },
            }
          )
          .then((response) => callback(false, response.data))
          .catch((error) => callback(true, error));
      },
    };
  },
});

export default echo;
