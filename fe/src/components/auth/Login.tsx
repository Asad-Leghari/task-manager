import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import authApis from "../../infrastructure/auth/api";
import { useNavigate } from "react-router";
import useGlobalCxt from "../../hooks/useGlobalCxt";
import { AxiosError } from "axios";

const Login = () => {
  const navigate = useNavigate();
  const { user } = useGlobalCxt();
  const [LoginForm, setLoginForm] = useState({ username: "", password: "" });
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState<string | null>();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLoginForm({
      ...LoginForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    if (!LoginForm.username || !LoginForm.password)
      return setError("username and password must not be empty");
    try {
      setLoading(true);
      const res = await authApis.login(LoginForm.username, LoginForm.password);
      localStorage.setItem("access", res.access);
      localStorage.setItem("refresh", res.refresh);
      localStorage.setItem("user", JSON.stringify(res.user));
      if (user.setUser) user.setUser(res.user);
      navigate("/home");
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        setError(error?.response?.data.detail);
        console.log(error);
      } else {
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setError(null);
    }, 3000);
  }, [Error]);

  return (
    <Grid
      container
      flex={1}
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Paper
        elevation={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          p: 2,
          width: { xs: "300px", sm: "600px", md: "500px" },
          borderRadius: "10px",
        }}
      >
        <Typography variant="h4" my={2}>
          Login To Task Manager
        </Typography>
        <TextField
          variant="outlined"
          label="username"
          name="username"
          fullWidth
          onChange={(e) => handleChange(e)}
        />
        <TextField
          variant="outlined"
          label="password"
          name="password"
          fullWidth
          onChange={(e) => handleChange(e)}
        />
        {Error && (
          <Typography
            variant="body2"
            textAlign={"center"}
            width={"100%"}
            color="error"
          >
            {Error}
          </Typography>
        )}
        <Typography
          variant="caption"
          textAlign={"end"}
          width={"100%"}
          sx={{
            "&:hover": {
              textDecoration: "underline",
            },
            cursor: "pointer",
          }}
        >
          Forgot Password
        </Typography>
        <Button variant="contained" onClick={handleLogin} disabled={Loading}>
          Login
        </Button>
      </Paper>
    </Grid>
  );
};

export default Login;
