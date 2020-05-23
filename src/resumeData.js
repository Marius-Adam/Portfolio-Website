let resumeData = {
  logo: "./images/Logo.png",
  avatar: "./images/AvatarCircle.png",
  name: "Marius",
  surname: "Adam",
  jobTitle: "Front-End Developer",
  cvLink:
    "https://drive.google.com/file/d/16fMgoUsveJUNdOG1_eU6bRnG4CYRAKry/view?usp=sharing",
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
    {
      name: "React",
      link: "https://reactjs.org/",
      icon: "fab fa-react",
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
      captionHeading: "Project",
      captionSub: "Project Project Project",
    },
    {
      modalLink: "#projectModal3",
      projectCover: "/images/projects/Project3.png",
      captionHeading: "Project",
      captionSub: "Project Project Project",
    },
    {
      modalLink: "#projectModal4",
      projectCover: "/images/projects/Project4.png",
      captionHeading: "Project",
      captionSub: "Project Project Project",
    },
    {
      modalLink: "#projectModal5",
      projectCover: "/images/projects/Project5.png",
      captionHeading: "Project",
      captionSub: "Project Project Project",
    },
    {
      modalLink: "#projectModal6",
      projectCover: "/images/projects/project-cover-1.png",
      captionHeading: "Project",
      captionSub: "Project Project Project",
    },
  ],

  projectModals: [
    {
      modalId: "projectModal1",
      projectTitle: "JS Shopping Cart",
      projectDetails:
        "Vanilla JS shopping cart with implemented Local storage. Data is fed from Contentful where more products can be easily added withouth the need of re-deploy.",
      projectImg: "/images/projects/Project1.png",
      code: "https://github.com/Marius-Adam/leica-shopping-cart",
      liveDemo: "https://marius-adam.github.io/leica-shopping-cart/",
    },
    {
      modalId: "projectModal2",
      projectTitle: "Project Title",
      projectSubtitle: "Project Subtitle Project Subtitle",
      projectDetails:
        "Project Details Project Details Project Details Project Details Project Details ",
      projectImg: "/images/projects/Project2.png",
    },
    {
      modalId: "projectModal3",
      projectTitle: "Project Title",
      projectSubtitle: "Project Subtitle Project Subtitle",
      projectDetails:
        "Project Details Project Details Project Details Project Details Project Details ",
      projectImg: "/images/projects/Project3.png",
    },
    {
      modalId: "projectModal4",
      projectTitle: "Project Title",
      projectSubtitle: "Project Subtitle Project Subtitle",
      projectDetails:
        "Project Details Project Details Project Details Project Details Project Details ",
      projectImg: "/images/projects/Project4.png",
    },
    {
      modalId: "projectModal5",
      projectTitle: "Project Title",
      projectSubtitle: "Project Subtitle Project Subtitle",
      projectDetails:
        "Project Details Project Details Project Details Project Details Project Details ",
      projectImg: "/images/projects/Project5.png",
    },
    {
      modalId: "projectModal6",
      projectTitle: "Project Title",
      projectSubtitle: "Project Subtitle Project Subtitle",
      projectDetails:
        "Project Details Project Details Project Details Project Details Project Details ",
      projectImg: "/images/01-full.jpg",
    },
  ],
};

export default resumeData;
