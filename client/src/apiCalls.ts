import axios from "axios";
import { UserObj } from './interfaces';



export const loginCall = async (userCredentials: {}, dispatch: (arg0: { type: string; payload?: UserObj; }) => void) => {

  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("auth/login", userCredentials)
    console.log(res.data)
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error })
  }
}