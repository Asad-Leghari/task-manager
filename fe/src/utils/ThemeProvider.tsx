import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  responsiveFontSizes,
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
      theme={
        theme.ActiveTheme === "dark"
          ? responsiveFontSizes(darkTheme)
          : responsiveFontSizes(lightTheme)
      }
    >
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
