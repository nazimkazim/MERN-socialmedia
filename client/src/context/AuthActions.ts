import { UserObj } from '../interfaces'

export const LoginStart = () => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user: UserObj) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFailure = (error: string) => ({
  type: "LOGIN_FAILURE",
  payload: error
});