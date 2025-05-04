import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Landing from "./components/landing/Landing";
import Register from "./components/auth/Register";
import ThemeProvider from "./utils/ThemeProvider";
import GlobalContext from "./utils/GlobalContext";
import Layout from "./components/layout/Layout";
import Login from "./components/auth/Login";
import ProtectedLayout from "./components/layout/ProtectedLayout";
import Home from "./components/home/Home";

function App() {
  return (
    <BrowserRouter>
      <GlobalContext>
        <ThemeProvider>
          <Routes>
            {/* public routes */}
            <Route element={<Layout />}>
              <Route path="/" element={<Landing />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            {/* protected routes */}
            <Route element={<ProtectedLayout />}>
              <Route path="/home" element={<Home />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </GlobalContext>
    </BrowserRouter>
  );
}

export default App;
