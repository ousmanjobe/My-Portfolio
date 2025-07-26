export interface Project {
    name: string;
    client: string;
    description: string;
    src: string;
    year: number;
  }
  
  export const conProjects: Project[] = [
    {
      name: "Poster1",
      client: "Grow",
      description: "Jean-Francois Millet",
      src: "Poster2.PNG",
      year: 2023,
    },
    {
      name: "The Great Wave off Kanagawa",
      client: "Decimal",
      description: "Katsushika Hokusai",
      src: "Poster3.PNG",
      year: 2023,
    },
    {
      name: "Fine Wind, Clear Weather",
      client: "analogueagency",
      description: "Katsushika Hokusai",
      src: "MFA3.png",
      year: 2023,
    },
    {
      name: "Kanbara: Night Snow",
      client: "Wix Playground",
      description: "Utagawa Hiroshige",
      src: "MFA4.png",
      year: 2023,
    },
    {
      name: "POWELL—STUDIO",
      client: "POWELL—STUDIO",
      description: "The online presence for Powell—Studio.",
      src: "powell.jpg",
      year: 2023,
    },
    {
      name: "ROCKETPANDA",
      client: "ET Studio",
      description: "An Italian animation studio.",
      src: "panda.jpg",
      year: 2022,
    },
    {
      name: "C2 Montreal",
      client: "Ingamana",
      description: "C2 Montréal is Canada's premier creative-business event.",
      src: "c2.jpg",
      year: 2021,
    },
    {
      name: "Design Is Funny",
      client: "Shader Studio",
      description: "Funny is the design work of Daniele Buffa.",
      src: "funny.jpg",
      year: 2020,
    },
  ];