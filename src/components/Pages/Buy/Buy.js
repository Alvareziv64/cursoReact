import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import { Link } from "react-router-dom";
import "./Buy.css";

const initialState = {
  email: "",
  name: "",
  lastName: "",
};

const Buy = () => {
  const [values, setValues] = useState(initialState);
  const [ventaId, setVentaId] = useState("");
  const onChage = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
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
    <div className="divVenta">
      {ventaId ? (
        <div>
          <h4 className="ticket">
            Venta completada, el id de su compra es: {ventaId}
          </h4>
          <Link to="/">          <button type="submit" className="btn btn-info">
            Volver al home
          </button></Link>
        </div>
      ) : (
        <form className="formVenta" onSubmit={onSubmit}>
          <h3>Complete el formulario para terminar su compra</h3>
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
              Nos estaremos comunicando por este medio.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
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
            <label className="form-label">Apellido</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="lastName"
              value={values.lastName}
              onChange={onChage}
            ></input>
          </div>
          <button type="submit" className="btn btn-success">
            Terminar Compra
          </button>
        </form>
      )}
    </div>
  );
};

export default Buy;
