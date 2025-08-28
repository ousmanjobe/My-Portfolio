export interface Project {
    name: string;
    client: string;
    description: string;
    src: string;
    year: number;
  }
  
  export const recProjects: Project[] = [
    {
      name: "Landscape with Sheperdess and Sheep, Winter",
      client: "Grow",
      description: "Jean-Francois Millet",
      src: "MFA1.webp",
      year: 2023,
    },
    {
      name: "The Great Wave off Kanagawa",
      client: "Decimal",
      description: "Katsushika Hokusai",
      src: "MFA2.webp",
      year: 2023,
    },
    {
      name: "Fine Wind, Clear Weather",
      client: "analogueagency",
      description: "Katsushika Hokusai",
      src: "MFA3.webp",
      year: 2023,
    },
    {
      name: "Kanbara: Night Snow",
      client: "Wix Playground",
      description: "Utagawa Hiroshige",
      src: "MFA4.webp",
      year: 2023,
    },
  ];