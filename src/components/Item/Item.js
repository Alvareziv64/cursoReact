import * as React from "react";
import "./Item.css";
import {
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//Dark Theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
    },
  },
});

const Item = ({ data }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Card sx={{ maxWidth: 280 }}>
        <CardActionArea>
          <CardMedia className="MuiCardMedia-img"
            component="img"
            image={data.img}
            alt="comic"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {data.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.title}
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="div">
              {"$" + data.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </ThemeProvider>
  );
};

export default Item;
