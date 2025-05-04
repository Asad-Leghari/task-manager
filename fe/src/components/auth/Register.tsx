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

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
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
        <TextField variant="outlined" label="first name" fullWidth />
        <TextField variant="outlined" label="last name" fullWidth />
        <TextField variant="outlined" label="username" fullWidth />
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            fullWidth
            label="password"
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
        <Button variant="contained">Register</Button>
      </Paper>
    </Grid>
  );
};

export default Register;
