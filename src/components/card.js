const Card = ({ title, poster }) => {
  return (
    <div class="card">
      <img src={poster} />
      <div class="card-info">
        <div class="first-content">
          <h1 class="title"></h1>
        </div>
        <div class="secund-content">
          <h2 class="title">{title}</h2>
          <p class="description">
            {" "}
            Filme do harry potter é um belo filme de ação e aventura ficticion
            do mundo de harry onde enfrenta mostros e uma grande ameaça, que é o
            voldemort o lord da morte.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
