import axios from "axios";

let urlBase = "https://rickandmortyapi.com/api";

export const getGeneralInfo = (id) => axios.get(`${urlBase}/location/${id}`);

export const getResidentsInfo = (url) => axios.get(`${url}`);