import React, { useContext } from "react";
import { CartContext } from "../../CartContext";
import { Link } from "react-router-dom";
import "./CartContainer.css"

const CartContainer = () => {
  const { cart, setCart, nCantidad, sumar, restar, borrar } = useContext(CartContext);

  //Reduce para sumar precio total
  const nPrecio = cart.reduce(
    (acc, { quantity, price }) => acc + quantity * price,
    0
  );
  //Eliminar productos del carrito
  const borrarTodo = () => {
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
        <tbody>
          {cart.map((item) => {
            return (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name + ", " + item.title}</td>
                <td>{item.quantity}</td>
                <td>
                  <button onClick={() => sumar(item.id)} className="btn btn-info btn-sm">+</button>
                  <button onClick={() => restar(item.id)} className="btn btn-danger btn-sm">-</button>
                  <button onClick={() => borrar(item.id)} className="btn btn-outline-danger btn-sm">Borrar</button>
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
            <tr>
              <th scope="row" colSpan="2">
                Total productos
              </th>
              <td>{nCantidad}</td>
              <td>
                <button
                  onClick={borrarTodo}
                  className="btn btn-outline-danger btn-sm"
                > 
                  Vaciar carrito
                </button>
                <button
                  className="btn btn-success btn-sm"
                > 
                  Finalizar compra
                </button>
              </td>
              <td className="font-weight-bold">
                <span>{"$" + nPrecio}</span>
              </td>
            </tr>
          ) : (
            <tr>
              <th scope="row" colSpan="2">
                Carrito Vacio
              </th>
              <td><Link to="/"><button className="btn btn-info goShop">Ir a tienda</button></Link></td>
            </tr>
          )}
        </tfoot>
      </table>
    </div>
  );
};

export default CartContainer;
