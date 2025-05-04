import React from "react";
import { Box, Grid, Tab, Tabs } from "@mui/material";
import { a11yProps, CustomTabPanel } from "./Tabs";
import AllTasks from "./AllTasks";
import MyTasks from "./MyTasks";
import CreateTasks from "./CreateTasks";

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid container flexDirection={"column"} flex={1} alignItems={"center"}>
      <Box sx={{ borderColor: "divider", width: "fit-content" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="All Tasks" {...a11yProps(0)} />
          <Tab label="My Tasks" {...a11yProps(1)} />
          <Tab label="Create Tasks" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <AllTasks />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <MyTasks />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <CreateTasks />
      </CustomTabPanel>
    </Grid>
  );
};

export default Home;
