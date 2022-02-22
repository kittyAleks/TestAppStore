import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

export const saveData = async (email, password, nickname) => {
  // const AUTH_URL = "http://localhost";
  // const url = SERVER + '/oauth/token';
  // const params = {
  //   email,
  //   password,
  //   secret_key: 'mfGkVcO4HaFI2vs9GEaqpyQhDxio28l0hVLEdcJX'
  // };
  // return axios.post(AUTH_URL + '/auth/token', params)
  // return axios.post(url, params).then(({data}) => saveTokens(data));
  AsyncStorage.setItem("@save_nickname", nickname);
};

// export const getToken = () => {
//   return AsyncStorage.getItem('access_token');
// };
export const logOut = () => {
  AsyncStorage.removeItem("@save_nickname");
};



