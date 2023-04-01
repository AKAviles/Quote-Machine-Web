import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:8080/api";

export function registerUser(userData) {
  return axios
    .post(`${API_BASE_URL}/users`, userData)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function addQuote(quoteData) {
  return axios
    .post(`${API_BASE_URL}/users/1/quotes`, quoteData)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getQuotesForUser() {
  return axios
    .get(`${API_BASE_URL}/users/1/quotes`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getQuoteById() {}

export function deleteQuoteById(quoteId) {
  return axios
    .delete(`${API_BASE_URL}/users/1/${quoteId}/remove`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}
