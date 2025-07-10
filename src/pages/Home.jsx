// src/pages/Home.jsx
import { useState, useEffect } from "react";
import ProductCard from "/src/components/ProductCard";
import products from "/src/data/products";
import  "/src/css/Carrossel.css"


function Home() {
  const banners = [
    { id: 1, src: "/src/imagem/banner01.png", alt: "Promoção 1" },
    { id: 2, src: "/src/imagem/banner02.png", alt: "Promoção 2" },
    { id: 3, src: "/src/imagem/banner03.png", alt: "Promoção 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Muda o banner automaticamente a cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div>
      {/* Carrossel de Banners */}
      <div className="carousel">
        <img
          src={banners[currentIndex].src}
          alt={banners[currentIndex].alt}
          className="carousel-image"
        />
        <div className="carousel-indicators">
          {banners.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div>
      </div>

      {/* Lista de Produtos */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
