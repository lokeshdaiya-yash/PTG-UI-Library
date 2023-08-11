import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { Card } from "./component/card/card";
import { Login } from "./component/login/login";
import ProtectedRoute from "./component/login/protected";
import { UserAuthContextProvider } from "./component/login/userAuthControl";
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
