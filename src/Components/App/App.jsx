import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard, Login, NotFound, Wrapper } from "../../Pages/index.js";
import ProtectAuth from "../ProtectedRoutes/ProtectAuth.jsx";
import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes.jsx";


const App = () => {
  return <React.Fragment>

    <Wrapper>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route
            path="/"
            element={
              <Dashboard />
            }
          />
        </Route>
        <Route element={<ProtectAuth />}>
           <Route
          path="login"
          element={
            <Login />
          }
        />
          </Route>
       
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Wrapper>
  </React.Fragment>;
}
export default App;
