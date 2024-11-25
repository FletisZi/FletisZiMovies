import IconMaior from "../../public/maior.jsx";
import IconMenor from "../../public/menor.jsx";
import Card from "./Card";

function Section({ valor, pageValue, setPageValue }) {
  if (!Array.isArray(valor)) {
    return <div>Nenhum filme encontrado</div>; // Mensagem de erro para caso não seja um array
  }
  return (
    <>
      <div className="navPage">
        <button
          className="btnRemove"
          onClick={() => {
            if (pageValue > 1) {
              setPageValue((prevValue) => prevValue - 1);
            }
          }}
        >
          <IconMenor />
        </button>
        <div className="title">{pageValue}</div>
        <button
          className="btnAdd"
          onClick={() => {
            setPageValue((prevValue) => prevValue + 1);
          }}
        >
          <IconMaior />
        </button>
      </div>
      <section>
        {valor.map((e, index) => (
          <Card title={e.Title} poster={e.Poster} />
          // <div key={index}>{e.Title}</div> // Renderiza o título de cada elemento
        ))}
      </section>
    </>
  );
}

export default Section;
