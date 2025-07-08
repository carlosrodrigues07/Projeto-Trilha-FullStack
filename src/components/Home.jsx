

function Home() {
  return (
    <div className="Home">
      <header>
        <img src="/src/img/logo.png" className="logo" />
        <span>Papelaria Pó de Giz</span>
        <nav>
          <ul>
            <li>Inicio</li>
            <li>Produtos</li>
            <li>Sobre</li>
            <li>Contato</li>
            <li>Carrinho</li>
          </ul>
        </nav>
        <div className="login-icon">👤</div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-text">
            <h1>Pintura e Arte</h1>
            <p>Inspire-se e crie com materiais ideais para dar vida à sua imaginação. Tudo para artistas de todos os níveis.</p>
          </div>
          <div className="hero-image">
            <img src="/src/img/banner-bg.png" alt="Materiais de Arte" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
