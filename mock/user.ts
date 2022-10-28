
type RoleType = 'admin' | 'user'
interface IUser {
  name: string,
  role: RoleType
}

type Roles = {
  [k in RoleType]: IUser
}

const User: Roles = {
  admin: {
    name: '韩寒',
    role: 'admin'
  },
  user: {
    name: '用户',
    role: 'user'
  },
}


export const getUser = (userName: string): IUser => {
  return User[userName] || null
}


export default getUser

