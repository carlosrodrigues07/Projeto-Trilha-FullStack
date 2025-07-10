import { useCart } from "/src/context/CardContext";

function Cart() {
  const { cart, removeFromCart, total, clearCart } = useCart();

  return (
    <div className="p-4">
      <h1>Carrinho de Compras</h1>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between border-b py-2">
              <span>{item.name} x {item.quantity}</span>
              <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
              <button onClick={() => removeFromCart(item.id)}>Remover</button>
            </div>
          ))}
          <h2 className="mt-4">Total: R$ {total.toFixed(2)}</h2>
          <button onClick={clearCart} className="mt-2 bg-red-500 text-white px-4 py-2 rounded">
            Finalizar Compra
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
