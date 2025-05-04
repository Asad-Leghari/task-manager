import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { IRegisterForm } from "../../domain";
import authApis from "../../infrastructure/auth/api";
import useGlobalCxt from "../../hooks/useGlobalCxt";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [RegisterForm, setRegisterForm] = useState<IRegisterForm>({
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    confirm_password: "",
  });
  const { user } = useGlobalCxt();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRegisterForm({
      ...RegisterForm,
      [e.target.name]: e.target.value,
    });
  };
  const handleRegister = async () => {
    switch ("") {
      case RegisterForm.first_name: {
        return alert("first name cannot be empty");
      }
      case RegisterForm.last_name: {
        return alert("last name cannot be empty");
      }
      case RegisterForm.username: {
        return alert("username cannot be empty");
      }
      case RegisterForm.password: {
        return alert("password cannot be empty");
      }
      case RegisterForm.confirm_password: {
        return alert("confirm password cannot be empty");
      }
    }
    if (RegisterForm.password !== RegisterForm.confirm_password)
      return alert("passwords should match");
    try {
      setLoading(true);
      const res = await authApis.register({
        first_name: RegisterForm.first_name,
        last_name: RegisterForm.last_name,
        username: RegisterForm.username,
        password: RegisterForm.password,
      });
      localStorage.setItem("access", res.access);
      localStorage.setItem("refresh", res.refresh);
      localStorage.setItem("user", JSON.stringify(res.user));
      if (user.setUser) {
        user.setUser(res.user);
      }
      navigate("/home");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
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
          Register To Task Manager
        </Typography>
        <TextField
          variant="outlined"
          label="first name"
          name="first_name"
          fullWidth
          onChange={(e) => handleChange(e)}
        />
        <TextField
          variant="outlined"
          label="last name"
          name="last_name"
          fullWidth
          onChange={(e) => handleChange(e)}
        />
        <TextField
          variant="outlined"
          label="username"
          name="username"
          fullWidth
          onChange={(e) => handleChange(e)}
        />
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            fullWidth
            label="password"
            name="password"
            onChange={(e) => handleChange(e)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password2">
            Confirm Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password2"
            type={showPassword ? "text" : "password"}
            fullWidth
            label="confirm password"
            name="confirm_password"
            onChange={(e) => handleChange(e)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button variant="contained" onClick={handleRegister} disabled={Loading}>
          Register
        </Button>
      </Paper>
    </Grid>
  );
};

export default Register;
