import React, { useState, useContext } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { Link } from "react-router-dom";
import "./BuyForm.css";
import { CartContext } from "../../CartContext";

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

  const onSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "ventas"), {
      values,
    });
    setVentaId(docRef.id);
    setValues(initialState);
  };

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
              onClick={() => borrarTodo()}
              type="submit"
              className="btn btn-success"
            >
              Finish purchase
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BuyForm;
