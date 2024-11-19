import React, { useEffect, useState } from "react";
import Header from "../src/components/Header";
import "../src/styles/global.css";
import "../src/styles/card.css";
import "../src/styles/header.css";
import Section from "../src/components/Section";

function App({ Component, pageProps }) {
  const [movies, setMovies] = React.useState("");
  console.log(movies.Search);

  return (
    <>
      <Header movies={movies} setMovies={setMovies} />
      <Component {...pageProps} />
      <Section valor={movies.Search} />
    </>
  );
}

export default App;
