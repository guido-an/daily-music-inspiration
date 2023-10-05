import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import useSWR, { SWRConfig } from 'swr'
import { swrConfig } from './config/swrConfig';
import { theme } from './theme/theme';
import { ThemeProvider } from 'styled-components'; 

console.log(theme, 'theme')

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
     <SWRConfig value={swrConfig}>
       <ThemeProvider theme={theme}>
         <App />
       </ThemeProvider>
    </SWRConfig>
  </React.StrictMode>
);

