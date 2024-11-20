import Card from "./Card";

function Section({ valor }) {
  if (!Array.isArray(valor)) {
    return <div>Nenhum filme encontrado</div>; // Mensagem de erro para caso não seja um array
  }
  return (
    <section>
      {valor.map((e, index) => (
        <Card title={e.Title} poster={e.Poster}/>
        // <div key={index}>{e.Title}</div> // Renderiza o título de cada elemento
      ))}
    </section>
  );
}

export default Section;
