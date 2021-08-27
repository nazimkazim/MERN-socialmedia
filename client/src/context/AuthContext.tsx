import { createContext, useReducer } from 'react';

export interface InitialState {
  user: null;
  isFetching: boolean;
  error: boolean;
  dispatch?: React.DispatchWithoutAction;
}

const INITIAL_STATE: InitialState = {
  user: null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext<InitialState>(INITIAL_STATE);
type MyComponentProps = React.PropsWithChildren<{}>;

export const AuthContextProvider = ({ children }: MyComponentProps): JSX.Element => {
  const [state, dispatch] = useReducer(AuthContext, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
