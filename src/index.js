import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Web3ReactProvider } from '@web3-react/core';
import './fonts/PPMonumentExtended/PPMonumentExtended-Bold.ttf';
import { ethers } from "ethers";
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));

const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 8000;
  return library;
};

root.render(
  <ChakraProvider>
    <Web3ReactProvider getLibrary={getLibrary}>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </Web3ReactProvider>
  </ChakraProvider>
);


