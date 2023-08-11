import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Card } from "./components/card/card";
import { Login } from "./components/login/login";
import ProtectedRoute from "./components/login/protected";
import { UserAuthContextProvider } from "./components/login/userAuthControl";
export default function Root() {
  return (
    <>
    {/* Routing */}
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
    </>
  );
}
