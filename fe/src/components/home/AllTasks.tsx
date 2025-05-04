import React, { useEffect, useState } from "react";
import useGlobalCxt from "../../hooks/useGlobalCxt";
import { Grid, Typography } from "@mui/material";
import Task from "./Task";
import { AxiosError } from "axios";
import taskServices from "../../infrastructure/tasks/services";

const AllTasks = () => {
  const { tasks } = useGlobalCxt();
  const [Error, setError] = useState("");
  const [Loading, setLoading] = useState(false);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await taskServices.fetchAllTasks();
      if (tasks.setAllTasks) {
        tasks.setAllTasks(res);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.detail);
        console.log(error);
      } else {
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 3000);
  }, [Error]);

  if (Loading) {
    return (
      <Grid container flexDirection={"column"} alignItems={"center"}>
        <Typography variant="h4" textAlign={"center"}>
          Loading
        </Typography>
      </Grid>
    );
  }

  return (
    <Grid container flexDirection={"column"} alignItems={"center"} gap={"16px"}>
      {tasks.AllTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </Grid>
  );
};

export default AllTasks;
