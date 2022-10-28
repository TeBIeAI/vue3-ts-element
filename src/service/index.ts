import Request from './request'
// import { RequestConfig } from './request/type'

const instance = new Request({
  baseURL: 'http://localhost:5173/',
  interceptors: {
    // 请求拦截器
    // requestInterceptors: config => {
    //   debugger
    //   console.log('实例请求拦截器')

    //   return config
    // },
    // // 响应拦截器
    // responseInterceptors: result => {
    //   console.log('实例响应拦截器')
    //   return result
    // },
  },
})
// console.log(instance);

interface YWZRequestConfig<T> extends RequestConfig {
  data?: T
}

interface YWZResponse<T> {
  code: number
  message: string
  data: T
}

const request = <D, T = any>(config: YWZRequestConfig<D>) => {

  const { method = 'GET' } = config
  return instance.hcrequest<YWZResponse<T>>(config)
}

export default request