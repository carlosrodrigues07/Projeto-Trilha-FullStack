// src/data/products.js
const products = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Produto ${i + 1}`,
  description: `Descrição completa do Produto ${i + 1}.`,
  price: (5 + i * 0.75).toFixed(2),
  image: `/src/assets/produto${(i % 10) + 1}.jpg`, // 10 imagens reutilizadas
}));

export default products;
