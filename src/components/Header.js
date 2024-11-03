import React, { useState, useEffect } from "react";
import getMovies from "../../services/API_Fetch";

function Header({ Apesquisa }) {

  const [searchTerm, setSearchTerm] = useState("");
  const [resposta, setResposta] = useState(null);

  useEffect(() => {
    if (!searchTerm) {
      setResposta(null);
      return;
    }

    const fetchMovies = async () => {
      try {
        const data = await getMovies(searchTerm, 2);
        setResposta(data);
        console.log(data);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    };

    fetchMovies();
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <nav>
      <input
        type="text"
        placeholder="Pesquisar filmes..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      {resposta && resposta.Search ? (
        <ul>
          {resposta.Search.map((filme) => (
            <li key={filme.imdbID}>{filme.Title}</li>
          ))}
        </ul>
      ) : (
        searchTerm && <p>Nenhum filme encontrado.</p>
      )}
    </nav>
  );
}

export default Header;
