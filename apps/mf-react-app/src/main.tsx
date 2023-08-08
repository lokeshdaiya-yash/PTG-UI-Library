import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Card } from "./component/card/card";
import { Login } from "./component/login/login";
import ProtectedRoute from "./component/login/protected";
import { UserAuthContextProvider } from "./component/login/userAuthControl";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
        <UserAuthContextProvider>
          <Routes>
            <Route
              path="/card"
              element={
                <ProtectedRoute>
                  <Card />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Login />} />
          </Routes>
        </UserAuthContextProvider>
      </BrowserRouter>
  </StrictMode>
);
