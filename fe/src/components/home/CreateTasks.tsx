import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import taskApis from "../../infrastructure/tasks/api";
import useGlobalCxt from "../../hooks/useGlobalCxt";
import { ITask } from "../../domain";

const CreateTasks = () => {
  const { tasks } = useGlobalCxt();
  const [TaskForm, setTaskForm] = useState({ title: "", description: "" });
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState("");
  const [Success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTaskForm({
      ...TaskForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = async () => {
    if (!TaskForm.title || !TaskForm.description)
      return setError("title or description cannot be empty");
    try {
      setLoading(true);
      const res = await taskApis.createTask(TaskForm);
      const newTask: ITask = {
        id: res.id,
        author: res.author,
        title: res.title,
        description: res.description,
      };
      if (tasks.setAllTasks) {
        tasks.setAllTasks((prev) => [...prev, newTask]);
      }
      setTaskForm({ title: "", description: "" });
      setSuccess("task created successfully");
    } catch (error: unknown) {
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
    setTimeout(() => {
      setError("");
      setSuccess("");
    }, 3000);
  }, [Error, Success]);

  return (
    <Grid container flexDirection={"column"} alignItems={"center"} mt={"50px"}>
      <Paper
        elevation={2}
        sx={{
          width: { xs: "275px", sm: "600px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          p: 2,
        }}
      >
        <Typography variant="h4">Creating Task</Typography>
        <TextField
          variant="outlined"
          label="Title"
          name="title"
          fullWidth
          value={TaskForm.title}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          variant="outlined"
          label="Description"
          name="description"
          fullWidth
          multiline
          minRows={3}
          maxRows={6}
          value={TaskForm.description}
          onChange={(e) => handleChange(e)}
        />
        {Success && (
          <Typography variant="caption" color="success">
            {Success}
          </Typography>
        )}
        {Error && (
          <Typography variant="caption" color="error">
            {Error}
          </Typography>
        )}
        <Button variant="contained" onClick={handleClick} disabled={Loading}>
          Create
        </Button>
      </Paper>
    </Grid>
  );
};

export default CreateTasks;
