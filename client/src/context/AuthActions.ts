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

export const Follow = (userId: string) => ({
  type: "FOLLOW",
  payload: userId
});

export const Unfollow = (userId: string) => ({
  type: "UNFOLLOW",
  payload: userId
});