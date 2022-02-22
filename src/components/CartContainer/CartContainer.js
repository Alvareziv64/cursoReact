import React, { useContext } from "react";
import { CartContext } from "../../CartContext";

const CartContainer = () => {

  const { cart, nCantidad, nPrecio } = useContext(CartContext);

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
        <tbody id="items">
          {cart.map((item) => {
            return (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>
                  <button className="btn btn-info btn-sm">+</button>
                  <button className="btn btn-danger btn-sm">-</button>
                </td>
                <td>
                  <span>{"$" + item.price * item.quantity}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr id="footer">
            <th scope="row" colSpan="2">
              Total productos
            </th>
            <td>{nCantidad}</td>
            <td>
              <button className="btn btn-danger btn-sm" id="vaciarCarrito">
                Vaciar carrito
              </button>
            </td>
            <td className="font-weight-bold">
               <span>{"$" + nPrecio}</span>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CartContainer;
