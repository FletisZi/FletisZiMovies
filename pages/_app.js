import React, { useEffect, useState } from "react";
import Header from "../src/components/Header";
import "../src/styles/global.css";
import "../src/styles/card.css";
import "../src/styles/header.css";
import Section from "../src/components/Section";


function App({ Component, pageProps }) {
  const [movies, setMovies] = React.useState("");
  const [pages, setPages] = React.useState("1");

  // console.log(movies.Search);

  return (
    <>
      <Header
        movies={movies}
        setMovies={setMovies}
        pages={pages}
        setPage={setPages}
      />
      <Component {...pageProps} />
      <Section
        valor={movies.Search}
        pageValue={pages}
        setPageValue={setPages}
      />
    </>
  );
}

export default App;
