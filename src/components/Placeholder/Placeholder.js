import React from "react";
import { Skeleton, Stack } from "@mui/material";
import "./Placeholder.css";

const Placeholder = () => {
  return (
    <div className="placeholder">
      <Stack spacing={1}>
        <Skeleton variant="rectangular" width={260} height={330} />
        <Skeleton variant="text" width={245} />
        <Skeleton variant="text" width={245} />
        <Skeleton variant="text" width={80} />
      </Stack>
    </div>
  );
};

export default Placeholder;
