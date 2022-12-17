import { createContext, useState } from 'react';

const AuthContext = createContext({
  token: '',
  isLoggedIn: false,
  login: _token => {},
  logout: () => {},
});

export const AuthCtxProvider = ({ children }) => {
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;

  const loginHandler = token => {
    setToken(token);
    localStorage.setItem('token', token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
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
