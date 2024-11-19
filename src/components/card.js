const Card = ({ title }) => {
  return (
    <div className="card">
      <div className="card-info">
        <p className="title">{title}</p>
      </div>
    </div>
  );
};

export default Card;
