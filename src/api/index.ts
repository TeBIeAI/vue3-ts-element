import { request } from '../service/request/index';

// interface Req {
//   q?: string
// }

// interface Res {
//   total_count: number,
//   items: any[]
// }

export const getUser = (params: any) => {
  return request({
    url: '/user/getUser',
    method: 'GET',
    params
  })
}
export const getAddr = (data: any) => {
  return request({
    url: '/search/users?q=1',
    method: 'GET',
    data,
  })
}


// export const getAddr = (data: any) => {
//   return request<Req, Res>({
//     url: '/search/users?q=1',
//     method: 'GET',
//     data,
//     interceptors: {
//       requestInterceptors(res) {
//         console.log('api requestInterceptors', res);
//         return res
//       },
//       responseInterceptors(result) {
//         console.log(result);
//         return result
//       },
//     }
//   })
// }

// export const getAddr1 = (data: any) => {
//   return request<Req, Res>({
//     url: '/search/users?q=2',
//     method: 'GET',
//     data
//   })
// }