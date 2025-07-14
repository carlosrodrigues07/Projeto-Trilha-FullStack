// Footer.jsx
export default function Footer() {
  const companyInfo = {
    name: "Papelaria Pó de Giz",
    address: "Rua Guilherme, 123 - Centro, Fortaleza - CE",
    phone: "(85) 3220-1010",
    email: "contato@papelariapodegiz.com.br",
    cnpj: "01.234.567/0001-89" 
  };

  return (
    <footer className="bg-gray-200 text-center p-4 mt-8 text-gray-700">
      <div className="container mx-auto px-4">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} {companyInfo.name} - Todos os direitos reservados
        </p>
        <div className="text-sm">
          <p>{companyInfo.address}</p>
          <p>Telefone: <a href={`tel:${companyInfo.phone}`} className="hover:underline">{companyInfo.phone}</a></p>
          <p>Email: <a href={`mailto:${companyInfo.email}`} className="hover:underline">{companyInfo.email}</a></p>
          {companyInfo.cnpj && <p>CNPJ: {companyInfo.cnpj}</p>} {/* Exibe CNPJ se existir */}
        </div>
      </div>
    </footer>
  );
}