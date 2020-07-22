let resumeData = {
  logo: "./images/Logo.png",
  avatar: "./images/AvatarCircle.png",
  name: "Marius",
  surname: "Adam",
  jobTitle: "Front-End Developer",
  cvLink:
    "https://drive.google.com/file/d/1RL9GNPqIvTuhCthVXIcWIAnkUT9vBr6O/view?usp=sharing",
  socialLinks: [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/marius-adam-3804571a8/",
      icon: "fab fa-linkedin",
    },
    {
      name: "GitHub",
      link: "https://github.com/Marius-Adam",
      icon: "fab fa-github",
    },
    {
      name: "FreeCodeCamp",
      link: "https://www.freecodecamp.org/mcadam1",
      icon: "fab fa-free-code-camp",
    },
    {
      name: "Stack",
      link: "https://stackoverflow.com/users/13433802/mcadam",
      icon: "fab fa-stack-overflow",
    },
  ],
  projects: [
    {
      modalLink: "#projectModal1",
      projectCover: "/images/projects/Project1.png",
      captionHeading: "JS Shopping Cart",
      captionSub: "Vanilla JS Shopping Cart With Local Storage",
    },
    {
      modalLink: "#projectModal2",
      projectCover: "/images/projects/Project2.png",
      captionHeading: "Car Charging Points",
      captionSub: "Interactive Map For Electric Cars",
    },
    {
      modalLink: "#projectModal3",
      projectCover: "/images/projects/Project3.png",
      captionHeading: "Color Flipper",
      captionSub: "Simple JS Color Flipper",
    },
    {
      modalLink: "#projectModal4",
      projectCover: "/images/projects/Project4.png",
      captionHeading: "To Do List",
      captionSub: "Local Storage To Do List",
    },
    {
      modalLink: "#projectModal5",
      projectCover: "/images/projects/Project5.png",
      captionHeading: "RGB Guessing Game",
      captionSub: "The Great RGB Color Guessing Game",
    },
    {
      modalLink: "#projectModal6",
      projectCover: "/images/projects/Project6.png",
      captionHeading: "React Budget Calculator",
      captionSub: "Built with React Hooks and Context API",
    },
  ],

  projectModals: [
    {
      modalId: "projectModal1",
      projectTitle: "JS Shopping Cart",
      projectDetails:
        "Vanilla JS shopping cart with implemented Local storage. Data is fed from Contentful where more products can be easily added re-deploy.",
      projectImg: "/images/projects/Project1.png",
      code: "https://github.com/Marius-Adam/leica-shopping-cart",
      liveDemo: "https://marius-adam.github.io/leica-shopping-cart/",
    },
    {
      modalId: "projectModal2",
      projectTitle: "Car Charging Points",
      projectDetails:
        "Created using Open Charger API and React Mapbox. An interactive map showing all charging points around the user. Still in development, more features to be added soon.",
      projectImg: "/images/projects/Project2.png",
      code: "https://github.com/Marius-Adam/car-charging-points",
      liveDemo: "https://stoic-carson-b251bf.netlify.app/",
    },
    {
      modalId: "projectModal3",
      projectTitle: "Color Flipper",
      projectDetails:
        "A simple background color flipper app built with HTML, CSS and JavaScript. It features two modes: Simple where the color is picked from an array and Hex where a custom hex code is generated on every click.",
      projectImg: "/images/projects/Project3.png",
      code: "https://github.com/Marius-Adam/color-flipper",
      liveDemo: "https://marius-adam.github.io/color-flipper/",
    },
    {
      modalId: "projectModal4",
      projectTitle: "To Do List",
      projectDetails:
        "A simple, mobile-responsive To-Do list app built with HTML, CSS and JavaScript. I built this To Do List to solidify my knowledge of JavaScript fundamentals and to practice implementing local storage. ",
      projectImg: "/images/projects/Project4.png",
      code: "https://github.com/Marius-Adam/local-storage-todo-list",
      liveDemo: "https://marius-adam.github.io/local-storage-todo-list/",
    },
    {
      modalId: "projectModal5",
      projectTitle: "RGB Guessing Game",
      projectDetails:
        "RGB Color Guessing Game is a fun game that will help you improve your knowledge of RGB colors. Based on the exercise part of the Udemy course The Web Developer Bootcamp by Colt Steele.",
      projectImg: "/images/projects/Project5.png",
      code: "https://github.com/Marius-Adam/the-RGB-game",
      liveDemo: "https://marius-adam.github.io/the-RGB-game/",
    },
    {
      modalId: "projectModal6",
      projectTitle: "React Budget Calculator",
      projectDetails:
        "I build this budget calculator as a result of a tutorial I found on React Hooks. Hooks are functions that let you “hook into” React state and lifecycle features from function components.",
      projectImg: "/images/projects/Project6.png",
      code: "https://github.com/Marius-Adam/react-budget-calculator",
      liveDemo: "https://marius-adam.github.io/react-budget-calculator/",
    },
  ],
};

export default resumeData;
