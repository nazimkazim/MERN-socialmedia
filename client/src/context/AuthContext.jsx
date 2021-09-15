import { createContext, useReducer } from 'react';
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
  user: {
    _id: '6107b32f65928d1868457777',
    profilePicture: 'person/1.jpeg',
    coverPicture: '',
    followers: [],
    followings: [],
    isAdmin: false,
    username: 'Sam',
    email: 'sam@mail.ru',
  },
  isFetching: false,
  error: false,
  dispatch: (a, b) => {},
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer);

  return (
    <AuthContext.Provider
      value={{
        user: state?.user,
        isFetching: state?.isFetching,
        error: state?.error,
        dispatch,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
