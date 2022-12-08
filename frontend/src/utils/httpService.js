import axios from "axios";

import { interceptor } from "./intercepter";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 60000,
  // withCredentials: true
});

//call axios interceptor
interceptor(instance);

const request = async ({ method, url, data, headers, skipAuth }) => {
  const promise = instance[method](url, data);
  try {
    const response = await promise;
    const payload = response.data;
    if (headers) {
      return {
        data: payload,
        headers: response.headers,
      };
    }

    return response;
  } catch (err) {
    let msg = err.response?.data?.message;
    if (err.response?.data?.details) {
      msg = err.response.data.details.message;
    }
    console.log("ERROR", new Error(msg));
    throw new Error(msg);
  }
};

export const get = (url, params) => request({ method: "get", url, ...params });
export const post = (url, data, params) =>
  request({ method: "post", url, data, ...params });
export const put = (url, data, params) =>
  request({ method: "put", url, data, ...params });
export const del = (url, data) => request({ method: "delete", url, data });
