let resumeData = {
  logo: "./images/Logo.png",
  avatar: "./images/AvatarCircle.png",
  name: "Marius",
  surname: "Adam",
  jobTitle: "Front-End Developer",
  cvLink:
    "https://drive.google.com/file/d/1ZMJYPHK_kjVDvNYcUz8uMMa0IEOMBgIs/view?usp=sharing",
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
      captionHeading: "Responsive Navbar",
      captionSub: "Vanilla JS SmoothScroll And ScrollSpy",
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
      captionHeading: "React Data Table",
      captionSub: "Smart React Data Table",
    },
  ],

  projectModals: [
    {
      modalId: "projectModal1",
      projectTitle: "JS Shopping Cart",
      projectDetails:
        "Vanilla JS shopping cart with implemented Local storage. Data is fed from Contentful where more products can be easily added without the need of re-deploy.",
      projectImg: "/images/projects/Project1.png",
      code: "https://github.com/Marius-Adam/leica-shopping-cart",
      liveDemo: "https://marius-adam.github.io/leica-shopping-cart/",
    },
    {
      modalId: "projectModal2",
      projectTitle: "Responsive Navbar",
      projectDetails:
        "This project was part of the Learn Vanilla JavaScript Challange. I decided to make it more challanging by also implementing SmoothScroll and SpyScroll.",
      projectImg: "/images/projects/Project2.png",
      code: "https://github.com/Marius-Adam/responsive-navbar",
      liveDemo: "https://marius-adam.github.io/responsive-navbar/",
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
      projectTitle: "React Data Table",
      projectDetails:
        "In development, refactoring old code and implementing react hooks.",
      projectImg: "/images/projects/Project6.png",
    },
  ],
};

export default resumeData;
