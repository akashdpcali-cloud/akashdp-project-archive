const github = "./images/social/github.jpg";
const live = "./images/social/live.jpg";
const doc = "./images/social/doc.jpg";

export const aboutData = {
  name: "Akash D P",
  profilePic: "./images/profile/me.jpeg",
  quot: "Full-Stack Dev | Redefine whats possible",
  techStack: [
    "react.js",
    "node.js",
    "express.js",
    "three.js",
    "gsap",
    "blender",
    "postgreSQL",
    "prisma ORM",
  ],
  socialMedia: [
    {
      socialPic: "./images/social/github.jpg",
      socialName: "akashdpcali-cloud",
      socialLink: "https://github.com/akashdpcali-cloud",
    },
    {
      socialPic: "./images/social/linkedin.png",
      socialName: "akashdpcali",
      socialLink: "https://linkedin.com/in/akashdpcali/",
    },
    {
      socialPic: "./images/social/youtube.png",
      socialName: "cielostatics",
      socialLink: "https://www.youtube.com/@cielostatics",
    },
  ],
};

// -------------------------  PROJECTS  ----------------------------
export const projectsData = [
  // 17. CHAT WEB APPLICATION
  {
    id: 17,
    title: "chat web-application",
    projectType: "fullstack-project",
    projectImg: "./images/projects/17.png",
    projectDiscription:
      "I built a full-stack real-time chat application with React.js on the frontend and Node.js with Express.js on the backend. Socket.IO powers the live messaging for both individual and group chats, and the data is stored in PostgreSQL through Prisma. I built the full account system: signup, login, logout, change password, delete account, a profile picture and a changeable username. I also added moderation features, so users can block other users and block groups. I learned how WebSockets differ from regular HTTP requests, how to manage real-time events like sending messages and updating chats, and how to model users, chats, groups and blocks in a relational database. I deployed the frontend on Vercel, the backend on Render and the database on Neon, which taught me how to run a WebSocket server in production and keep all three services connected.",
    techStack: [
      {
        key: "frontend",
        value: "react.js",
      },
      {
        key: "backend",
        value: "node.js",
      },
      {
        key: "backend-framework",
        value: "express.js",
      },
      {
        key: "web socket",
        value: "socket.io",
      },
      {
        key: "database",
        value: "PostgreSQL",
      },
      {
        key: "ORM",
        value: "prisma",
      },
      {
        key: "frentend-deployment",
        value: "vercel",
      },
      {
        key: "backend-deployment",
        value: "render",
      },
      {
        key: "database-deployment",
        value: "neon",
      },
    ],
    projectLinks: [
      {
        linkImg: github,
        linkTitle: "github",
        linkUrl: "github.com/akashdpcali-cloud/ChatApp",
      },
      {
        linkImg: doc,
        linkTitle: "documentation",
        linkUrl: "deepwiki.com/akashdpcali-cloud/ChatApp",
      },
      {
        linkImg: live,
        linkTitle: "live",
        linkUrl: "chat-app-zeta-flax-29.vercel.app/",
      },
    ],
  },
  // 16. AI CHAT BOT
  {
    id: 16,
    title: "AI chat bot",
    projectType: "fullstack-project",
    projectImg: "./images/projects/16.png",
    projectDiscription:
      "I built a full-stack AI chatbot with React.js on the frontend and Node.js with Express.js on the backend. Chat replies come from the Groq API, and images are generated with Pollinations.ai. Users can sign up and log in, and their chat history is stored in a PostgreSQL database through Prisma. I learned how to build authentication end to end and how to design a REST API for chat history, using GET to load past chats, POST to save new messages, PUT to edit them, and DELETE to remove them. I also learned how to connect two third-party AI services to my own server and show the results in React. Finally, I deployed each part separately: the frontend on Vercel, the backend on Render, and the database on Neon. That taught me how to manage environment variables and keep the three services talking to each other in production.",
    techStack: [
      {
        key: "frontend",
        value: "react.js",
      },
      {
        key: "backend",
        value: "node.js",
      },
      {
        key: "backend-framework",
        value: "express.js",
      },
      {
        key: "AI powered chat",
        value: "GROQ API",
      },
      {
        key: "image generation",
        value: "Pollinations.ai",
      },
      {
        key: "database",
        value: "PostgreSQL",
      },
      {
        key: "ORM",
        value: "prisma",
      },
      {
        key: "frentend-deployment",
        value: "vercel",
      },
      {
        key: "backend-deployment",
        value: "render",
      },
      {
        key: "database-deployment",
        value: "neon",
      },
    ],
    projectLinks: [
      {
        linkImg: github,
        linkTitle: "github",
        linkUrl: "github.com/akashdpcali-cloud/ChatBot",
      },
      {
        linkImg: doc,
        linkTitle: "documentation",
        linkUrl: "deepwiki.com/akashdpcali-cloud/ChatBot",
      },
      {
        linkImg: live,
        linkTitle: "live",
        linkUrl: "chat-bot-nine-pied-14.vercel.app/",
      },
    ],
  },
  // 15. FLEUR CLONE
  {
    id: 15,
    title: "fleur clone",
    projectType: "frontend-project",
    projectImg: "./images/projects/15.png",
    projectDiscription:
      "I built a clone of the Fleur landing page with React.js as the project for my application to Code Nimbus Solutions, and it helped me land the frontend internship there. I used GSAP for the animations and Lucide React and React Icons for the icons, then deployed the finished site on Vercel. I learned how to turn a real-world design into reusable React components, and how to match the spacing, typography and layout of an existing site. I also learned how to build smooth scroll and entrance animations with GSAP inside React, using refs and cleanup so they behave properly on each render. Building it under a real hiring deadline taught me to work from a design reference and ship something polished and live.",
    techStack: [
      {
        key: "frontend",
        value: "react.js",
      },
      {
        key: "animation",
        value: "GSAP",
      },
      {
        key: "icons",
        value: "lucid-react & react icons",
      },
      {
        key: "deployment",
        value: "vercel",
      },
    ],
    projectLinks: [
      {
        linkImg: github,
        linkTitle: "github",
        linkUrl: "github.com/akashdpcali-cloud/FleurClone",
      },
      {
        linkImg: live,
        linkTitle: "live",
        linkUrl: "fleur-clone-ruby.vercel.app/",
      },
    ],
  },
  // 14. IMAGE TO 3D
  {
    id: 14,
    title: "image to 3D",
    projectType: "fullstack-project",
    projectImg: "./images/projects/14.avif",
    projectDiscription:
      "I built a full-stack app that turns an image into a downloadable GLB 3D model, with a text-to-3D feature as well. The frontend uses HTML, CSS and JavaScript, with Three.js to preview the generated model in the browser. The backend runs on Node.js and Express.js and talks to the Tripo AI API, with SQLite and Prisma storing the data. I learned how to send an image to a third-party API from my own server, handle the generation process, and return the finished GLB file to the frontend. I also built authentication, learned how to render and inspect GLB models in Three.js, and connected the frontend, backend and database into one working product.",
    techStack: [
      {
        key: "frontend",
        value: "HTML, CSS & JS",
      },
      {
        key: "API",
        value: "Tripo AI",
      },
      {
        key: "3D rendering ",
        value: "three.js",
      },
      {
        key: "backend",
        value: "Node.js",
      },
      {
        key: "backend-framework",
        value: "express.js",
      },
      {
        key: "database",
        value: "SQLite",
      },
      {
        key: "ORM",
        value: "Prisma",
      },
    ],
    projectLinks: [
      {
        linkImg: github,
        linkTitle: "github",
        linkUrl: "github.com/akashdpcali-cloud/ImageTo3D",
      },
      {
        linkImg: doc,
        linkTitle: "documentation",
        linkUrl: "deepwiki.com/akashdpcali-cloud/ImageTo3D",
      },
    ],
  },
  // 13. 3D PORTFOLIO 1
  {
    id: 13,
    title: "3d portfolio 1",
    projectType: "3D frontend-project",
    projectImg: "./images/projects/13.png",
    projectDiscription:
      "This was my first 3D portfolio, built with a Minecraft-inspired look using HTML, CSS and JavaScript. I modeled the scene in Blender and rendered it in the browser with Three.js, which taught me how to load 3D models, set up a scene with a camera and lighting, and run a render loop. I used an Octree for collision detection so the player can move around without passing through objects, and GSAP to add smooth animations and transitions. I also learned the full workflow of taking a 3D asset from Blender into the web and deploying the finished project on Vercel.",
    techStack: [
      {
        key: "frontend",
        value: "HTML, CSS & JS",
      },
      {
        key: "3D modeling",
        value: "blender",
      },
      {
        key: "3D rendering ",
        value: "three.js",
      },
      {
        key: "collision detection",
        value: "octree",
      },
      {
        key: "Animation",
        value: "GSAP",
      },
      {
        key: "deployment",
        value: "vercel",
      },
    ],
    projectLinks: [
      {
        linkImg: github,
        linkTitle: "github",
        linkUrl: "github.com/akashdpcali-cloud/AkashDP-3DPortfolio",
      },
      {
        linkImg: live,
        linkTitle: "live",
        linkUrl: "akashdp.vercel.app/",
      },
    ],
  },
  // 12. ECOMMERCE BACKEND
  {
    id: 12,
    title: "Ecommerce backend",
    projectType: "backend-project",
    projectImg: "./images/projects/12.png",
    projectDiscription:
      "I built the backend for my e-commerce app with Node.js and Express.js, using SQLite as the database and Prisma as the ORM. I designed a REST API that handles every type of request: GET to fetch data, POST to create it, PUT/PATCH to update it, and DELETE to remove it. With Prisma, I learned how to define a schema, run migrations, and query the database without raw SQL. Building it also taught me how to organize routes in a larger Express project and return clean JSON responses and error codes to the frontend.",
    techStack: [
      {
        key: "backend",
        value: "node.js",
      },
      {
        key: "frameword",
        value: "express.js",
      },
      {
        key: "database",
        value: "SQLite",
      },
      {
        key: "ORM",
        value: "Prisma",
      },
    ],
    projectLinks: [
      {
        linkImg: github,
        linkTitle: "github",
        linkUrl: "github.com/akashdpcali-cloud/Ecommerce-backend",
      },
      {
        linkImg: doc,
        linkTitle: "documentation",
        linkUrl: "deepwiki.com/akashdpcali-cloud/Ecommerce-backend",
      },
    ],
  },
  // 11. ECOMMERCE FRONTEND
  {
    id: 11,
    title: "Ecommerce frontend",
    projectType: "frontend-project",
    projectImg: "./images/projects/12.png",
    projectDiscription:
      "I built the frontend of an e-commerce app with React.js, and it was my first big project with it. The biggest thing I learned was connecting a React app to a REST API using every type of request: GET to load products, POST to create data, PUT/PATCH to update it, and DELETE to remove it. I got better at splitting the UI into reusable components, managing state with hooks, and re-rendering the page when data changes. It also taught me how to organize a larger project with multiple pages and keep the data flow clean as the app grows.",
    techStack: [
      {
        key: "frontend",
        value: "react.js",
      },
    ],
    projectLinks: [
      {
        linkImg: github,
        linkTitle: "github",
        linkUrl: "github.com/akashdpcali-cloud/Ecommerce-Frontend-React",
      },
    ],
  },
  // 10. TO DO LIST BACKEND
  {
    id: 10,
    title: "to-do-list backend",
    projectType: "backend-project",
    projectImg: "./images/projects/10.png",
    projectDiscription:
      "This is the backend for my to-do list app, and my first backend project. I built it with Node.js and Express.js, using SQLite as the database and Prisma as the ORM. I learned how to set up an Express server, define routes for creating accounts, logging in, and handling tasks, and handle GET, POST and DELETE requests. With Prisma, I learned how to define a schema, run migrations, and query the database without writing raw SQL. It also taught me how the frontend and backend communicate, from the request coming in to the JSON response going back.",
    techStack: [
      {
        key: "backend",
        value: "Node.js",
      },
      {
        key: "framework",
        value: "Express.js",
      },
      {
        key: "database",
        value: "SQLite",
      },
      {
        key: "ORM",
        value: "Prisma",
      },
    ],
    projectLinks: [
      {
        linkImg: github,
        linkTitle: "github",
        linkUrl: "github.com/akashdpcali-cloud/To-Do-List-Backend",
      },
      {
        linkImg: doc,
        linkTitle: "documentation",
        linkUrl: "deepwiki.com/akashdpcali-cloud/To-Do-List-Backend",
      },
    ],
  },
  // 9. TO DO LIST FRONTEND
  {
    id: 9,
    title: "to-do-list frontend",
    projectType: "frontend-project",
    projectImg: "./images/projects/10.png",
    projectDiscription:
      "I built the frontend of a to-do list app using HTML, CSS and JavaScript. Users can create an account, log in and log out, and add tasks with a name and a due date. I learned how to work with HTTP requests: a GET request to load the saved tasks, a POST request to add a new one, and a DELETE request to remove one. I also practiced building multi-page flows with separate login and signup pages, handling form input, and updating the task list on the page after each request.",
    techStack: [
      {
        key: "frontend",
        value: "HTML, CSS & JS",
      },
    ],
    projectLinks: [
      {
        linkImg: github,
        linkTitle: "github",
        linkUrl: "github.com/akashdpcali-cloud/To-Do-List-frontend",
      },
    ],
  },
  // 8. CHATBOT(FRONTEND)
  {
    id: 8,
    title: "basic chatbot",
    projectType: "frontend-project",
    projectImg: "./images/projects/8.jpg",
    projectDiscription:
      "I built a basic chatbot using React.js and the OpenAI API, and deployed it on Vercel. Users type a message and the bot replies with a response from the model. I learned how to structure a React app with components and use useState to manage the conversation, and how to send requests to the OpenAI API and display the replies as they come back. I also practiced handling loading and error states, and I learned how to deploy a React project to Vercel and keep the API key out of the frontend code.",
    techStack: [
      {
        key: "frontend",
        value: "react.js",
      },
      {
        key: "API",
        value: "OpenAI",
      },
      {
        key: "Hosting",
        value: "vercel",
      },
    ],
    projectLinks: [
      {
        linkImg: github,
        linkTitle: "github",
        linkUrl: "github.com/akashdpcali-cloud/MyBot",
      },
      {
        linkImg: live,
        linkTitle: "Live",
        linkUrl: "my-bot-one-beta.vercel.app/",
      },
    ],
  },
  // 7. MOVIE REVIEW WEBSITE
  {
    id: 7,
    title: "movie review ",
    projectType: "frontend-project",
    projectImg: "./images/projects/7.png",
    projectDiscription:
      "I built a classic movie review website using HTML, CSS and JavaScript, powered by the TheMovieDB API. Users can browse movies and search for any title they want. I learned how to fetch data from an API with async/await, and how to pass search queries to an endpoint and handle the JSON response. I also practiced rendering movie cards dynamically from that data, including posters, titles and ratings, and updating the results on the page as the user searches.",
    techStack: [
      {
        key: "frontend",
        value: "HTML, CSS & JS",
      },
      {
        key: "API",
        value: "TheMovieDB",
      },
    ],
    projectLinks: [
      {
        linkImg: github,
        linkTitle: "github",
        linkUrl: "github.com/akashdpcali-cloud/Movie-Hotspot",
      },
      {
        linkImg: live,
        linkTitle: "Live",
        linkUrl: "akashdpcali-cloud.github.io/Movie-Hotspot/",
      },
    ],
  },
  // 6. WEDATHER FORCAST
  {
    id: 6,
    title: "weather forecast",
    projectType: "frontend-project",
    projectImg: "./images/projects/6.png",
    projectDiscription:
      "I built a weather forecast app using HTML, CSS and JavaScript, powered by WeatherAPI. The user enters a city name, and the app shows the live weather conditions for it. I learned how to fetch data from an API using fetch with async/await, and how to work with the JSON response to pull out the details I needed. I also practiced handling errors, such as an invalid city name or a failed request, and updating the page dynamically with the results.",
    techStack: [
      {
        key: "frontend",
        value: "HTML, CSS & JS",
      },
      {
        key: "API",
        value: "WeatherAPI",
      },
    ],
    projectLinks: [
      {
        linkImg: github,
        linkTitle: "github",
        linkUrl: "github.com/akashdpcali-cloud/Weather",
      },
      {
        linkImg: live,
        linkTitle: "Live",
        linkUrl: "akashdpcali-cloud.github.io/Weather/",
      },
    ],
  },
  // 5. RANDOM NUMBER GENERATOR
  {
    id: 5,
    title: "random number generator",
    projectType: "frontend-project",
    projectImg: "./images/projects/5.png",
    projectDiscription:
      "I built a random number generator using HTML, CSS and JavaScript. The user enters an upper limit, and the lower limit is always zero. When they click generate, the app produces a random number within that range. I learned how to read input values from the page and convert them into numbers, and how to use Math.random() with Math.floor() to get a whole number in a range. I also practiced validating input, such as handling empty or invalid values, and showing the result on the page.",
    techStack: [
      {
        key: "frontend",
        value: "HTML, CSS & JS",
      },
    ],
    projectLinks: [
      {
        linkImg: github,
        linkTitle: "github",
        linkUrl: "github.com/akashdpcali-cloud/CustomDice",
      },
      {
        linkImg: live,
        linkTitle: "Live",
        linkUrl: "akashdpcali-cloud.github.io/CustomDice/",
      },
    ],
  },
  // 4. ROCK PAPER SCISSORS
  {
    id: 4,
    title: "rock paper scissors",
    projectType: "frontend-project",
    projectImg: "./images/projects/4.png",
    projectDiscription:
      "I built a Rock Paper Scissors game against a bot using HTML, CSS and JavaScript. The bot picks its move by generating a random number with Math.random() and mapping it to rock, paper or scissors. I learned how to compare the player’s choice with the bot’s using conditional logic to decide the winner, and how to track the score across rounds. I also practiced handling button click events and updating the page with the result after every move.",
    techStack: [
      {
        key: "frontend",
        value: "HTML, CSS & JS",
      },
    ],
    projectLinks: [
      {
        linkImg: github,
        linkTitle: "github",
        linkUrl: "github.com/akashdpcali-cloud/RockPaperScissors",
      },
      {
        linkImg: live,
        linkTitle: "Live",
        linkUrl: "akashdpcali-cloud.github.io/RockPaperScissors/RPS",
      },
    ],
  },
  // 3. STOP WATCH
  {
    id: 3,
    title: "stop watch",
    projectType: "frontend-project",
    projectImg: "./images/projects/3.png",
    projectDiscription:
      "I built a stopwatch using HTML, CSS and JavaScript, with start, stop and reset controls. It taught me how to use setInterval to update the time and clearInterval to stop it. I also learned how to keep track of elapsed time in a variable and format it into minutes, seconds and milliseconds on the display. Connecting the buttons to that logic and updating the DOM in real time helped me understand how events and state work together.",
    techStack: [
      {
        key: "frontend",
        value: "HTML, CSS & JS",
      },
    ],
    projectLinks: [
      {
        linkImg: github,
        linkTitle: "github",
        linkUrl: "github.com/akashdpcali-cloud/stopwatch",
      },
      {
        linkImg: live,
        linkTitle: "Live",
        linkUrl: "akashdpcali-cloud.github.io/stopwatch/",
      },
    ],
  },
  // 2. DRAGON GAME
  {
    id: 2,
    title: "dragon game",
    projectType: "frontend-project",
    projectImg: "./images/projects/2.png",
    projectDiscription:
      "I built a read-and-play dragon game using HTML, CSS and JavaScript. There are no graphics. The game is text-driven, and the player makes choices that move the story forward. It taught me how to put the logic in JavaScript, such as tracking game state and deciding what happens next based on the player’s choices, and then show the result on the page by updating the DOM. Building it helped me understand how to keep the logic separate from the UI and connect the two.",
    techStack: [
      {
        key: "frontend",
        value: "HTML, CSS & JS",
      },
    ],
    projectLinks: [
      {
        linkImg: github,
        linkTitle: "github",
        linkUrl: "github.com/akashdpcali-cloud/DragonWarrior",
      },
      {
        linkImg: live,
        linkTitle: "Live",
        linkUrl: "akashdpcali-cloud.github.io/DragonWarrior/",
      },
    ],
  },
  // 1. YOUTUBE CLONE
  {
    id: 1,
    title: "youtube clone",
    projectType: "frontend-project",
    projectImg: "./images/projects/1.png",
    projectDiscription:
      "I built a static YouTube homepage clone using only HTML and CSS. By recreating the header, sidebar, and video grid, I learned how to structure a full page layout with semantic HTML and how to use Flexbox and CSS Grid for each section. I also added media queries to make the layout responsive, so the sidebar and video grid adapt cleanly from desktop down to mobile screens. Along the way, I got better at spacing, typography, and hover states so the result feels like the real interface.",
    techStack: [
      {
        key: "frontend",
        value: "HTML & CSS",
      },
    ],
    projectLinks: [
      {
        linkImg: github,
        linkTitle: "github",
        linkUrl: "github.com/akashdpcali-cloud/Youtubeclone",
      },
      {
        linkImg: live,
        linkTitle: "Live",
        linkUrl: "akashdpcali-cloud.github.io/Youtubeclone/",
      },
    ],
  },
];

// -------------------------- ACHIVEMENTS ---------------------------
export const achivements = [
  // 1 MAX PULL UPS
  {
    id: 100001,
    title: "max pullups",
    projectType: "Pull",
    projectImg: "./images/achivements/1.png",

    techStack: [
      {
        key: "grip",
        value: "pronated",
      },
      {
        key: "reps",
        value: "24",
      },
    ],
    projectLinks: [
      {
        linkImg: live,
        linkTitle: "Live",
        linkUrl: "youtube.com/shorts/D7AxFBUkKpE",
      },
    ],
  },
];
