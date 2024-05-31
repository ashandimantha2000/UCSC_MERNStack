import "./Cards.css";

function Cards(props) {
  return (
    <div>
      <div className="card">
        <h2>{props.title}</h2>
        <br />
        <hr />
        <br />
        <p>{props.description}</p>
        <br />
        <a href={props.link} target="_blank">
          <button>Open</button>
        </a>
      </div>
    </div>
  );
}

export default Cards;
