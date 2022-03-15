import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Footer from "../../Footer/Footer";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div style={{ backgroundColor: "rgb(27, 26, 26)" }}>
      <div className="errorPage">
        <Stack sx={{ width: "500px" }} spacing={2}>
          <Alert severity="error">
            Page not found! Probably out of this universe...
          </Alert>
        </Stack>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
