import project1 from "../assets/projects/Project-1.png";
import project2 from "../assets/projects/Project-2.png";
import project3 from "../assets/projects/Project-3.png";


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023-2024 (Present)",
    role: "Frontend Developer",
    company: "Unisoft Technology",
    description: `Designed and developed user interfaces for web applications using JavaScript,Next.js and React. Worked closely with backend developers to integrated with MongoDB database and frontend components with JavaScript, Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Tailwind CSS", "Bootstrap 5", "JavaScript", "Nextjs", "Reactjs",],
  },
];

export const PROJECTS = [
  {
    title: "Cloud Kitchen App",
    image: project3,
    deploy: "http://mostafiz-cloud-kitchen-nextjs.vercel.app",
    description:
      "A Next.js-based platform for cloud kitchens, enhancing efficiency and scalability.",
    technologies: ["HTML", "CSS", "Tailwind", "Nextjs"]
  },
  {
    title: "Colth E-Commerce App",
    image: project1,
    deploy: "https://mostafiz-cloth-tailwind-reactjs.netlify.app",
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "Tailwind", "Reactjs", "Nodejs", "MongoDB", "Socket.io"],
  },
  {
    title: "Foods Order & Delivery App",
    image: project2,
    deploy: "https://mostafiz-foods-app.netlify.app",
    description:
      "A web platform enabling users to explore, select, and purchase meals from various restaurants efficiently online.",
    technologies: ["HTML", "CSS", "Reactjs", "Nodejs", "MongoDB"],
  },

];

export const CONTACT = {
  address: "Chittagong, 4203, Bangladesh",
  phoneNo: "+8801305592411, +8801971338816",
  email: "mostafiztarek@gmail.com",
};
