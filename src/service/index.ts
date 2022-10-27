import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class Request {
  instance: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);

    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        console.log("请求拦截");
        return config;
      },
      (error) => {
        return error;
      }
    );

    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        console.log("相应拦截");
        return res.data;
      },
      (error) => {
        return error;
      }
    );
  }

  request(config: AxiosRequestConfig) {
    return this.instance.request(config);
  }
}

export default Request;
