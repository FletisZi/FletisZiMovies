// pages/index.js

export default function Home() {
  const filmes = [
    { title: "Filme 1", description: "Descrição 1", image: "/filme1.jpg" },
    { title: "Filme 2", description: "Descrição 2", image: "/filme2.jpg" },
  ];

  return (
    <div>
      <h1>Bem-vindo à Página Inicial!</h1>
    </div>
  );
}
