import React, { useState, useEffect } from "react";
import getMovies from "../../services/API_Fetch";

function Header({ movies, setMovies, pages , setPage}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [resposta, setResposta] = useState(null);

  useEffect(() => {
    setPage(1)
    if (!searchTerm) {
      setResposta(null);
      return;
    }

    const fetchMovies = async () => {
      try {
        const data = await getMovies(searchTerm, pages);
        setResposta(data);
        setMovies(data);
        console.log(data);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    };

    fetchMovies();
  }, [searchTerm]);

  useEffect(() => {
    
    if (!searchTerm) {
      setResposta(null);
      return;
    }

    const fetchMovies = async () => {
      try {
        const data = await getMovies(searchTerm, pages);
        setResposta(data);
        setMovies(data);
        console.log(data);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    };

    fetchMovies();
  }, [ pages]);


  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header>
      <nav>
        <input
          className="inputSerach"
          type="text"
          placeholder="Pesquisar filmes..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        {/* {resposta && resposta.Search ? (
          <ul>
            {resposta.Search.map((filme) => (
              <li key={filme.imdbID}>{filme.Title}</li>
            ))}
          </ul>
        ) : (
          searchTerm && <p>Nenhum filme encontrado.</p>
        )} */}
      </nav>
    </header>
  );
}

export default Header;
