import { useParams } from "react-router-dom";
import products from "/src/data/products";
import { useCart } from "/src/context/CardContext";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();

  if (!product) return <p>Produto não encontrado.</p>;

  return (
    <div style={{ paddingBottom: "400px" }}>
      <img src={product.image} className="w-full max-w-md mx-auto" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Preço: R$ {product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-green-500 text-white px-4 py-2 mt-2 rounded"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

export default ProductDetails;
