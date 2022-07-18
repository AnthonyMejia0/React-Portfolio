import WebProject from "./WebProject";
import "./webprojectpage.scss";
import spotify from "./SpotifyHome.png";
import todo from "./ToDoList.png";
import snake from "./Snake.png"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function WebProjectPage() {
  return (
    <div className="w-project-page">
        <Carousel autoPlay infiniteLoop interval={10000} transitionTime={2000} showStatus={false} swipeable={false} >
            <WebProject
                title="Spotify Controller"
                desc="This is a Next.js project utilizing the Spotify API, custom hooks, NextAuth.js, and Middleware."
                img={spotify}
                url="https://spotify-clone-eta-smoky.vercel.app/"
            />

            <WebProject
                title="To Do List"
                desc="This is a To Do List built using React with hooks and Recoil for state management along with local storage."
                img={todo}
                url="https://todo-list-ecru-chi.vercel.app/"
            />

            <WebProject 
              title="Snake Game"
              desc="The classic snake game built using react with hooks."
              img={snake}
              url={"https://snake-game-steel.vercel.app/"}
            />
        </Carousel>
    </div>
  )
}

export default WebProjectPage