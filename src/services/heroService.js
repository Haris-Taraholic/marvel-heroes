import axios from "axios";

const fetchAll = () => {
  return axios({
    method: "GET",
    url:
      "http://gateway.marvel.com/v1/public/characters?apikey=230dfef498aed52d5b84abc1f9e11d14",
  });
};

const fetchHeroById = (id) => {
  return axios({
    method: "GET",
    url: `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=230dfef498aed52d5b84abc1f9e11d14`,
  });
};

export { fetchAll, fetchHeroById };
