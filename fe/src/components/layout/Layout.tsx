import { Grid } from "@mui/material";
import { Outlet } from "react-router";
import Navbar from "../misc/Navbar";

const Layout = () => {
  return (
    <Grid container justifyContent={"center"} width={"100%"}>
      <Grid
        container
        size={{ xs: 12 }}
        direction={"column"}
        minHeight={"100vh"}
        maxWidth={"1920px"}
      >
        <Navbar />
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Layout;
