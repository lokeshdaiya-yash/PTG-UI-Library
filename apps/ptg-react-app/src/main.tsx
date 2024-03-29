import { StrictMode } from 'react';
import React, { Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@ptg-ui/react';
import App from './app/app';
import './app/i18n/i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <Suspense fallback={<span>Loading...</span>}>
    <App />
  </Suspense>
  </BrowserRouter>
);

// ReactDOM.render(
//   <StrictMode>
//     <BrowserRouter>
//     <Suspense fallback={<span>Loading...</span>}>
//       <App />
//     </Suspense>
//     </BrowserRouter>
//   </StrictMode>,
//   document.getElementById('root')
// );
