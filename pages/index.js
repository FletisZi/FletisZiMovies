// import Script from "next/script";

// const API_URL = "https://www.omdbapi.com/";
// const API_KEY = "bc1fe9b5";

// async function getMovies(trend,page) {
//     let URL = `${API_URL}?apiKey=${API_KEY}&s=${trend}&page=${page}`;
//     const responseJson = await fetch(URL)
//     const response = await responseJson.json();
//     const data = response

//     return data;
// }

//     const resposta = await getMovies('lovely',2);

// function Home(){

//     console.log(resposta)
//     return (
//         <>
//             <script src="./services/API_Fetch"></script>
//         </>
//     )
// }

// export default Home;

import { useEffect, useState } from "react";
import Header from "../src/components/Header";
import getMovies from "../services/API_Fetch";

function Home() {
  // const [resposta, setResposta] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getMovies("love", 2);
  //     setResposta(data);
  //   };
  //   fetchData();
  // }, []);

  // console.log(resposta);

  return (
    <>
      <Header  />
      <script src="./services/API_Fetch"></script>
    </>
  );
}

export default Home;
