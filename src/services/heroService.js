import axios from "axios";

const fetchAll = () => {
  return axios({
    method: "GET",
    url:
      "http://gateway.marvel.com/v1/public/characters?apikey=230dfef498aed52d5b84abc1f9e11d14",
  });
};
export { fetchAll };
