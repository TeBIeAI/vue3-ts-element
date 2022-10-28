import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios'


interface IResponse<T = any> {
  code: number,
  msg: string,
  data?: T
}

class Request {
  axiosIntance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.axiosIntance = axios.create(config)


    this.axiosIntance.interceptors.request.use(
      (res) => {
        return res
      },
      (error) => {
        return error
      }
    )

    this.axiosIntance.interceptors.response.use(
      (res) => {
        return res
      },
      (error) => {
        return error
      }
    )
  }

  request(config: AxiosRequestConfig): Promise<IResponse> {
    return new Promise((resolve, reject) => {
      this.axiosIntance.request(config)
        .then(res => {
          resolve(res.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

}

const axiosInstance1 = new Request({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL
})



export const request = (config: AxiosRequestConfig) => {
  const { method = 'GET' } = config
  config[method == 'GET' ? 'params' : 'data'] = config.params
  return axiosInstance1.request(config)
}


