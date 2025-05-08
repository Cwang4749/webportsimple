import webpreview from "../../assets/portfolio/personal/preview.jpg";
import dietpreview from "../../assets/portfolio/unquiet/preview.jpg";
import seapreview from "../../assets/portfolio/seascroll/preview.jpg";
import chappreview from "../../assets/portfolio/chapk/preview.jpg";
import recpreview from "../../assets/portfolio/recipe/preview.jpeg";
import vrpreview from "../../assets/portfolio/vr/preview.jpeg";
import freepreview from "../../assets/portfolio/free/preview.png";
import robopreview from "../../assets/portfolio/robosist/preview.jpeg";

const PortfolioData = [
    {
        projectName : "Personal Web App",
        preview : webpreview,
        description : "A web app built from scratch with the React Framework and hosted on Firebase. Every component was built with responsiveness in mind. In addition to the information displayed, the app itself is an expression of me."              
    },
    {
        projectName : "Diet Unquiet",
        preview : dietpreview,
        description : "A web app built by 7 Hunter College undergraduates with the React Framework. It offers the user a variety of options and approaches when it comes to losing weight, and staying healthy. Features include: user sign up/login, Google OAuth, recipe/exercise search and creation, journals, etc."
    },
    {
        projectName : "Seascroll",
        preview : seapreview,
        description : "An Android app built using the Flutter Framework, by 5 Hunter College undergraduates. Data is read and written to a PostgreSQL database on Google Cloud Platform through Cloud Functions."
    },
    {
        projectName : "Chap K",
        preview : chappreview,
        description : "A web app built using the Flutter Framework, by a group of 5 Hunter College undergraduates. Combines responsive widgets, the Firestore Database, a Stream/Future Builder for asynchronous functions, and a Google Translate API."
    },
    {
        projectName : "Recipe API",
        preview : recpreview,
        description : "A proof of concept for a recipe database and API, hosted by MySQL and tested with Postman. The API itself was built using .NET's Entity Framework Core Fluent API, while the example data was created using MySQL commands."
    },
    {
        projectName : "VR Maze",
        preview : vrpreview,
        description : "A VR maze game built in Unity 3D, with interactions such as: buttons, sliders, a 2D interface for inventory, etc. There are 4 scenes/maps, one for each team member, featuring its own theme, traps, enemies, etc."
    },
    {
        projectName : "Free",
        preview : freepreview,
        description : "A simple 2D maze game created using a custom built C++ based game engine. It uses GLFW to render the graphics and the engine abstracts most processes."
    },
    {
        projectName : "Robosist",
        preview : robopreview,
        description : "A robot assistant that performs simple tasks such as retrieving/shaking/pouring samples, line following, etc. Coded with Arduino C and built with motors/wheels/Arduino board/motor drivers, 3D printed shell, etc."
    }
];

export default PortfolioData;