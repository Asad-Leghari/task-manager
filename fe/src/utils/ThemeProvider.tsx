import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useGlobalCxt from "../hooks/useGlobalCxt";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useGlobalCxt();
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });
  return (
    <MuiThemeProvider
      theme={theme.ActiveTheme === "dark" ? darkTheme : lightTheme}
    >
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
