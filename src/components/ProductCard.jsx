// src/components/ProductCard.jsx
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="border rounded p-2 shadow">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
      <h2>{product.name}</h2>
      <p>R$ {product.price}</p>
      <Link to={`/produto/${product.id}`} className="text-blue-500">Ver detalhes</Link>
    </div>
  );
}

export default ProductCard;
