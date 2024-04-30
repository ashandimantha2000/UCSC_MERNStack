import Cards from "../Cards/Cards";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="bg">
        <h3>Welcome to</h3>
        <h1>Ashan Dimantha</h1>
        <h3>Portfolio</h3>
        <br />
        <button>Download My CV</button>
      </div>
      <div>
        <h1 className="title">Projects</h1>
        <div className="card-main">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default Home;
