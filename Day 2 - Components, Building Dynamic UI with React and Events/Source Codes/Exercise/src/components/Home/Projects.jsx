import Cards from "../Cards/Cards";
import './Home.css';

function Projects() {
  return (
    <div>
      <h1 className="title">Projects</h1>
      <div className="card-main">
        <Cards
          title="Book Store"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ab quos accusamus exercitationem obcaecati nisi corporis aperiam beatae culpa excepturi. "
          link="https://github.com/ashandimantha2000"
        />
        <Cards
          title="Workout Tracker"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ab quos accusamus exercitationem obcaecati nisi corporis aperiam beatae culpa excepturi. "
          link="https://github.com/ashandimantha2000"
        />
        <Cards
          title="Task Manager"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ab quos accusamus exercitationem obcaecati nisi corporis aperiam beatae culpa excepturi. "
          link="https://github.com/ashandimantha2000"
        />
        <Cards
          title="E-commerce Website"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ab quos accusamus exercitationem obcaecati nisi corporis aperiam beatae culpa excepturi. "
          link="https://github.com/ashandimantha2000"
        />
      </div>
    </div>
  );
}

export default Projects;
