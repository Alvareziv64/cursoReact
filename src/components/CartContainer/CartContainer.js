import React, { useContext } from "react";
import { CartContext } from "../../CartContext";

const CartContainer = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);
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
                    <button class="btn btn-info btn-sm">+</button>
                    <button class="btn btn-danger btn-sm">-</button>
                  </td>
                  <td>
                    <span>{"$" + item.price}</span>
                  </td>
                </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr id="footer">
            <th scope="row" colspan="S">
              Carrito vacío
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CartContainer;
