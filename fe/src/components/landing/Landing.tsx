import { Grid, Typography } from "@mui/material";

const Landing = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      flex={1}
      border={"1px solid red"}
    >
      <Typography variant="h1" textAlign={"center"}>
        This is Landing Page
      </Typography>
    </Grid>
  );
};

export default Landing;
