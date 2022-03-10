import React, { useState, useContext } from "react";
// FIREBASE
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
// LINK RRD
import { Link } from "react-router-dom";
// CSS
import "./BuyForm.css";
// CONTEXT
import { CartContext } from "../../CartContext";
// MATERIAL UI
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

// ALERT PURCHASE SUCCESS
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// FORM INFO
const initialState = {
  email: "",
  name: "",
  lastName: "",
};

const BuyForm = () => {
  const { cart, borrarTodo } = useContext(CartContext);
  const [values, setValues] = useState(initialState);
  const [ventaId, setVentaId] = useState("");
  const onChage = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value, ...cart });
  };

  //AGREGAR VENTA A FIREBASE
  const onSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "ventas"), {
      values,
    });
    setVentaId(docRef.id);
    setValues(initialState);
  };

  // ALERT CONFIG
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
    <div>
      <div className="divVenta">
        {ventaId ? (
          <div>
            <h4 className="ticket">
              Purchase complete, your transaction ID is:
            </h4>
            <h2 className="finishH2">{ventaId}</h2>
            <div className="btnFinish">
              <Link to="/">
                <button type="submit" className="btn btn-info btn-xl">
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <form className="formVenta" onSubmit={onSubmit}>
            <h3>Complete this form to checkout</h3>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                value={values.email}
                onChange={onChage}
              ></input>
              <div id="emailHelp" className="form-text">
                We will be communicating by this means.
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">First name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                name="name"
                value={values.name}
                onChange={onChage}
              ></input>
            </div>
            <div className="mb-3">
              <label className="form-label">Last name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                name="lastName"
                value={values.lastName}
                onChange={onChage}
              ></input>
            </div>
            <button
              onClick={() => borrarTodo() + handleClick()}
              type="submit"
              className="btn btn-success"
            >
              Finish purchase
            </button>
          </form>
        )}
      </div>
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
            Successful purchase!
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  );
};

export default BuyForm;
