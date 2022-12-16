import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { AuthCtxProvider } from './store/auth-context';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthCtxProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthCtxProvider>,
);
