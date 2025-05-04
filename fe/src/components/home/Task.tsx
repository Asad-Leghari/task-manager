import React from "react";
import { ITask } from "../../domain";
import { Avatar, Grid, IconButton, Paper, Typography } from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";

type Props = {
  task: ITask;
};

const Task = (props: Props) => {
  const { task } = props;
  return (
    <Paper
      elevation={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { xs: "275px", sm: "500px" },
        gap: "10px",
        p: 2,
        borderRadius: "10px",
      }}
    >
      <Grid
        container
        flexDirection={"row"}
        justifyContent={"space-between"}
        width={"100%"}
      >
        <Grid container flexDirection={"row"} width={"fit-content"} gap={"8px"}>
          <Avatar src="" alt={task.author.first_name} />
          <Grid container flexDirection={"column"} width={"fit-content"}>
            <Typography variant="body1" fontWeight={600}>
              {task.author.first_name} {task.author.last_name}
            </Typography>
            <Typography variant="body2">@{task.author.username}</Typography>
          </Grid>
        </Grid>
        <Grid container flex={1} justifyContent={"end"}>
          <IconButton>
            <MoreHoriz />
          </IconButton>
        </Grid>
      </Grid>
      <Typography variant="h5">
        {task.id}: {task.title}
      </Typography>
      <Typography variant="body1">{task.description}</Typography>
    </Paper>
  );
};

export default Task;
