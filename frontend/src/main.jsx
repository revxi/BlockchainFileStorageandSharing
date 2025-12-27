import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Context Providers
import { WalletProvider } from './context/WalletContext';
import { AuthProvider } from './context/AuthContext';
import { FileProvider } from './context/FileContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WalletProvider>
      <AuthProvider>
        <FileProvider>
          <App />
        </FileProvider>
      </AuthProvider>
    </WalletProvider>
  </React.StrictMode>
);