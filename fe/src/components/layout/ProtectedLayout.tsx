import { Grid } from "@mui/material";
import { Outlet } from "react-router";
import Navbar from "../misc/Navbar";
import Protected from "../../utils/Protected";

const ProtectedLayout = () => {
  return (
    <Protected>
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
    </Protected>
  );
};

export default ProtectedLayout;
