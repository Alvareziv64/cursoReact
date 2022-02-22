import React, { useContext } from "react";
import { CartContext } from "../../CartContext";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cart, setCart } = useContext(CartContext);

  //Reduce de cantidad de items
  const nCantidad = cart.reduce((acc, { quantity }) => acc + quantity, 0);
  //Reduce para sumar precio total
  const nPrecio = cart.reduce(
    (acc, { quantity, price }) => acc + quantity * price,
    0
  );
  //Eliminar productos del carrito
  const borrar = () => {
    setCart([]);
  };

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
          {nCantidad > 0 ? (
            <tr id="footer">
              <th scope="row" colSpan="2">
                Total productos
              </th>
              <td>{nCantidad}</td>
              <td>
                <button
                  onClick={borrar}
                  className="btn btn-danger btn-sm"
                  id="vaciarCarrito"
                >
                  Vaciar carrito
                </button>
              </td>
              <td className="font-weight-bold">
                <span>{"$" + nPrecio}</span>
              </td>
            </tr>
          ) : (
            <tr id="footer">
              <th scope="row" colSpan="2">
                Carrito Vacio
              </th>
              <td><Link to="/"><button className="btn btn-info btn-sm">Ir a tienda</button></Link></td>
            </tr>
          )}
        </tfoot>
      </table>
    </div>
  );
};

export default CartContainer;
