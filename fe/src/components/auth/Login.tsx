import { Button, Grid, Paper, TextField, Typography } from "@mui/material";

const Login = () => {
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
        <TextField variant="outlined" label="username" fullWidth />
        <TextField variant="outlined" label="username" fullWidth />
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
        <Button variant="contained">Login</Button>
      </Paper>
    </Grid>
  );
};

export default Login;
