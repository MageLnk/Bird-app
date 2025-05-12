import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Components
import App from './App.tsx';
import ApiProvider from './providers/ApiProvider.tsx';
// Styles
import './styles/normalize.css';
import './styles/globals.css';
// App
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApiProvider>
      <App />
    </ApiProvider>
  </StrictMode>
);
