import userMock from './user';
import Mock from 'mockjs';

interface IResult<T = number> {
  body: T
  headers: any
  query: any
  url: string
}

interface IRespone<T = any> {
  code: number,
  msg: string,
  data?: T
}

export default [
  {
    url: '/user/getUser',
    method: 'get',
    response(res: IResult): IRespone {
      const name = res.query.name
      const userName = userMock(name)
      if (userName) {
        return {
          code: 200,
          msg: '获取用户信息成功',
          data: userName
        }
      } else {
        return {
          code: -1,
          msg: '用户名不存在',
        }
      }
    }
  }
]