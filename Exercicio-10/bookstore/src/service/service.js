import axios from "axios";

const BASE_URL = "http://localhost:8080/v1/book";

export const getAllBooks = async () => {
  const options = { method: "GET", url: BASE_URL };
  return await axios
    .request(options)
    .then((response) => response.data)
    .catch((error) => error);
};

export const getValueOfAllBooks = async () => {
  const options = { method: "GET", url: BASE_URL + "/value" };
  return await axios
    .request(options)
    .then((response) => response.data)
    .catch((error) => error);
};
