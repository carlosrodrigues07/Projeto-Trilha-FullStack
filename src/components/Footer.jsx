export default function Footer() {
  const companyInfo = {
    name: "Papelaria Pó de Giz",
    address: "Rua Guilherme, 123 - Centro, Fortaleza - CE",
    phone: "(85) 3220-1010",
    email: "contato@papelariapodegiz.com.br",
    cnpj: "01.234.567/0001-89"
  };

  return (
    <footer style={{ background: "#E5EDFC" }} className="bg-gray-500 text-gray-700 py-6 mt-8">
      <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }} className="container mx-auto px-4 flex justify-between items-start gap-8">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {companyInfo.name} — Todos os direitos reservados
        </p>

        <div className="text-sm text-right space-y-1">
          <p>{companyInfo.address}</p>
          <p>
            Telefone: <a href={`tel:${companyInfo.phone}`} className="hover:underline">{companyInfo.phone}</a>
          </p>
          <p>
            Email: <a href={`mailto:${companyInfo.email}`} className="hover:underline">{companyInfo.email}</a>
          </p>
          {companyInfo.cnpj && <p>CNPJ: {companyInfo.cnpj}</p>}
        </div>
      </div>
    </footer>
  );
}
