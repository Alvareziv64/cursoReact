import React, { useContext } from "react";
import { CartContext } from "../../CartContext";
import { Link } from "react-router-dom";
import "./CartContainer.css";

const CartContainer = () => {
  const { cart, nCantidad, sumar, restar, borrar, nPrecio, borrarTodo} =
    useContext(CartContext);



  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Acción</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            return (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name + ", " + item.title}</td>
                <td>{item.quantity}</td>
                <td>
                  <button
                    onClick={item.quantity < item.stock ? (() => sumar(item.id)) : null}
                    className="btn btn-info btn-sm"
                  >
                    +
                  </button>
                  <button
                    onClick={() => restar(item.id)}
                    className="btn btn-danger btn-sm"
                  >
                    -
                  </button>
                </td>
                <td>
                  <span>{"$" + item.price.toFixed(2) * item.quantity}</span>
                </td>
                <td>
                <button
                    onClick={() => borrar(item.id)}
                    className="btn btn-outline-danger btn-sm"
                  >
                    x
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {nCantidad > 0 ? (
            <tr>
              <th scope="row" colSpan="2">
                Total productos
              </th>
              <td>{nCantidad}</td>
              <td>
                <button
                  onClick={() => borrarTodo()}
                  className="btn btn-outline-danger btn-sm"
                >
                  Vaciar carrito
                </button>
                <Link to="/buy" className="nav-item">
                  <button className="btn btn-success btn-sm">
                    Finalizar compra
                  </button>
                </Link>
              </td>
              <td className="font-weight-bold">
                <span>{"$" + nPrecio.toFixed(2)}</span> 
              </td>
            </tr>
          ) : (
            <tr>
              <th scope="row" colSpan="2">
                Carrito Vacio
              </th>
              <td>
                <Link to="/">
                  <button className="btn btn-info goShop">Ir a tienda</button>
                </Link>
              </td>
            </tr>
          )}
        </tfoot>
      </table>
    </div>
  );
};

export default CartContainer;
