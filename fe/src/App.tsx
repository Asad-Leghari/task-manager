import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Landing from "./components/landing/Landing";
import { Login } from "@mui/icons-material";
import Register from "./components/auth/Register";
import ThemeProvider from "./utils/ThemeProvider";
import GlobalContext from "./utils/GlobalContext";

function App() {
  return (
    <BrowserRouter>
      <GlobalContext>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </ThemeProvider>
      </GlobalContext>
    </BrowserRouter>
  );
}

export default App;
