import WebProject from "./WebProject";
import "./webprojectpage.scss";
import ImageLocker from "./ImageLocker.png";
import Amazon from "./AmazonClone.png";
import spotify from "./SpotifyHome.png";
import Countries from "./country-api.png";
import Jobs from "./Jobs.png";
import Shortly from "./url-short-screen.png";
import todo from "./ToDoList.png";
import snake from "./Snake.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function WebProjectPage() {
  return (
    <div className="w-project-page">
      <Carousel
        autoPlay
        infiniteLoop
        interval={10000}
        transitionTime={2000}
        showStatus={false}
        swipeable={false}
      >
        <WebProject
          title="Image Locker"
          desc="A personal image gallery with user authentication, cloud storage, and a user database built using Google Firebase and React."
          img={ImageLocker}
          url="https://photo-storage.vercel.app/"
        />

        <WebProject
          title="Spotify Controller"
          desc="This is a Next.js project utilizing the Spotify API, custom hooks, NextAuth.js, and Middleware."
          img={spotify}
          url="https://spotify-clone-eta-smoky.vercel.app/"
        />

        <WebProject
          title="Amazon Clone"
          desc="An Amazon clone built using React, Firebase, and Tailwind CSS. Supports credit card payments through Stripe for testing purposes. (Use card information 42424242... for example payment.)"
          img={Amazon}
          url="https://clone-442a3.web.app/"
        />

        <WebProject
          title="Rest Countries Api"
          desc="This is a React and Typescript project using the rest countries api to list, search, and view country details."
          img={Countries}
          url="https://rest-api-countries-tau.vercel.app/"
        />

        <WebProject
          title="Job Listings With Filters"
          desc="A simple job listing page with tags used to filter listing by categories."
          img={Jobs}
          url={"https://job-listings-page-jade.vercel.app/"}
        />

        <WebProject
          title="To Do List"
          desc="This is a To Do List built using React with hooks and Recoil for state management along with local storage."
          img={todo}
          url="https://todo-list-ecru-chi.vercel.app/"
        />

        <WebProject
          title="URL Shortener"
          desc="This is a React project which utilizes a link shortening api to provide unique short links to user input sites."
          img={Shortly}
          url="https://url-shortening-ruby.vercel.app/"
        />

        <WebProject
          title="Snake Game (Desktop)"
          desc="The classic snake game built using react with hooks and state management."
          img={snake}
          url={"https://snake-game-steel.vercel.app/"}
        />
      </Carousel>
    </div>
  );
}

export default WebProjectPage;
