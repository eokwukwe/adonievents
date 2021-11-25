export interface IUserRegister {
  firstName: string
  lastName: string
  email: string
  password: string
}
export interface IUserLogin {
  email: string
  password: string
}

export type UserData = {
  id: string
  first_name: string
  last_name: string
  email: string
  phone: string
  bio: string
  profile_img: string
  avatar: string
}

export interface IAuthUser {
  auth: {
    user: UserData
  }
}
