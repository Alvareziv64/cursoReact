import React, { useContext } from "react";
import { CartContext } from "../../CartContext";
import { Link } from "react-router-dom";
import "./CartContainer.css";

const CartContainer = () => {
  const { cart, nCantidad, sumar, restar, borrar, nPrecio} =
    useContext(CartContext);

  return (
    <div className="container divCart">
      <table className="table">
        <thead>
          <tr className="tableCart">
            <th scope="col"></th>
            <th scope="col">Item</th>
            <th scope="col">Units</th>
            <th scope="col">Action</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            return (
              <tr key={item.id} className="tableCart">
                <th scope="row"></th>
                <td>{item.name + ", " + item.title}</td>
                <td>{item.quantity}</td>
                <td>
                  <button
                    onClick={
                      item.quantity < item.stock ? () => sumar(item.id) : null
                    }
                    className="btn btn-info btn-sm"
                  >
                    +
                  </button>
                  <button
                    onClick={
                      item.quantity > 1
                        ? () => restar(item.id)
                        : () => borrar(item.id)
                    }
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
            <tr className="tableCart">
              <th scope="row" colSpan="2">
                Total products
              </th>

              <td>{nCantidad}</td>
              <td>

                <Link to="/buy" className="nav-item">
                  <button className="btn btn-success btn-sm btnCheckout">Checkout</button>
                </Link>
              </td>
              <td className="font-weight-bold">
                <span>{"$" + nPrecio.toFixed(2)}</span>
              </td>
            </tr>
          ) : (
            <tr className="tableCart">
              <th scope="row" colSpan="2">
                Empty cart... it's time to buy a new comic!
              </th>
            </tr>
          )}
        </tfoot>
      </table>
      {nCantidad === 0 ? (
        <div className="divGoShop"><Link to="/">
        <button className="btn btn-info goShop btn-lg">GO SHOP!</button>
      </Link></div>) : null}
    </div>
  );
};

export default CartContainer;
