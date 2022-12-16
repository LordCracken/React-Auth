import { createContext, useState } from 'react';

const AuthContext = createContext({
  token: '',
  isLoggedIn: false,
  login: _token => {},
  logout: () => {},
});

export const AuthCtxProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const userIsLoggedIn = !!token;

  const loginHandler = token => {
    setToken(token);
  };

  const logoutHandler = () => {
    setToken(null);
  };

  const ctxValue = {
    token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return <AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>;
};

export default AuthContext;
