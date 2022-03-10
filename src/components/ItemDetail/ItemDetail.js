import React, { useState, useContext } from "react";
// LINK RRD
import { Link } from "react-router-dom";
// CSS
import "./ItemDetail.css";
// COMPONENTS
import ItemCount from "../ItemCount/ItemCount";
// CONTEXT
import { CartContext } from "../../CartContext";
// MATERIAL UI
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Snackbar,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

//Dark Theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
    },
  },
});

const ItemDetail = ({ detail }) => {
  const [counter, setCounter] = useState(1);
  const [onAdd, setOnAdd] = useState(false);

  const { addItem } = useContext(CartContext);
  const newState = {
    id: detail.id,
    name: detail.name,
    title: detail.title,
    quantity: counter,
    price: detail.price,
    stock: detail.stock,
  };

  const addToCart = () => {
    if (counter > 0) {
      setOnAdd(true);
    }
  };

  const auxFuncion = () => {
    addItem(newState);
    addToCart();
    handleClick();
  };

  const handlerCounterUp = () => {
    if (counter < detail.stock) {
      setCounter(counter + 1);
    }
  };
  const handlerCounterDown = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  //ALERT ADD TO CART
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const vertical = "top";
  const horizontal = "right";

  return (
    <ThemeProvider theme={darkTheme}>
      <Card sx={{ maxWidth: 700 }}>
        <div className="div">
          <div>
            <CardMedia
              className="MuiCardMedia-img"
              component="img"
              image={detail.img}
              alt="comic"
            />
          </div>
          <div>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {detail.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {detail.title}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="div">
                {"$" + detail.price}
              </Typography>
              <Typography gutterBottom variant="body2" component="div">
                Stock: {detail.stock}
              </Typography>
              {onAdd === true ? (
                <div>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {counter} items added to cart
                  </Typography>
                  <div className="comprar">
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <Button variant="contained" color="success" size="small">
                        Keep buying
                      </Button>
                    </Link>
                  </div>
                  <div>
                    <Link to="/cart" style={{ textDecoration: "none" }}>
                      <Button variant="outlined" color="success" size="small">
                        Show cart
                      </Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <div>
                  <ItemCount
                    handlerCounterDown={handlerCounterDown}
                    handlerCounterUp={handlerCounterUp}
                    counter={counter}
                    auxFuncion={auxFuncion}
                  />
                </div>
              )}
            </CardContent>
          </div>
        </div>
      </Card>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={open}
          anchorOrigin={{ vertical, horizontal }}
          key={vertical + horizontal}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Comics added to cart!
          </Alert>
        </Snackbar>
      </Stack>
    </ThemeProvider>
  );
};

export default ItemDetail;
