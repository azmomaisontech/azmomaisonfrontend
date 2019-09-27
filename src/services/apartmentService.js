import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/apartments";

export function getApartments() {
  return http.get(apiEndPoint);
}

export function post(apartment) {
  return http.post(apiEndPoint, {
    name: apartment.name,
    address: apartment.address,
    contact: apartment.contact,
    price: apartment.price
  });
}
