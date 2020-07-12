import axios from "axios";

const fetchAll = (id) => {
  return axios({
    method: "GET",
    url: `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?apikey=230dfef498aed52d5b84abc1f9e11d14`,
  });
};

export { fetchAll };
