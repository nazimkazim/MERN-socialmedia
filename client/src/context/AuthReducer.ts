import { UserObj } from '../interfaces';


export interface InitialState {
  user: null;
  isFetching: boolean;
  error: boolean;
}

const INITIAL_STATE: InitialState = {
  user: null,
  isFetching: false,
  error: false,
};

type AppState = typeof INITIAL_STATE;


type Action =
  { type: "LOGIN_START" } |
  { type: "LOGIN_SUCCESS"; payload: UserObj } |
  { type: "LOGIN_FAILURE" }


const AuthReducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

export default AuthReducer;