export interface Project {
    title: string;
    description: string;
    src: string;
    url: string;
    color: string;
  }
  
  export const projects: Project[] = [
    {
      title: "Spreadsheet Web App",
      description: "A spreadsheet web application with features including formulas, range expressions, cell selection, importing/exporting CSV files, and more. The app is built with React, TypeScript, and uses a custom state management system for handling cell data and formulas.",
      src: "SpreadsheetCoverImage.png",
      url: "https://github.com/ousmanjobe/spreadsheet-web-application",
      color: "#BBACAF",
    },
    {
      title: "Midnight Munchies",
      description: "Navigate a zombie-infested Northeastern campus, earn money, and acquire midnight munchies at several checkpoint locations. This game was developed with Unity Engine and C# as part of a team project.",
      src: "MidnightMunchiesCoverImage.png",
      url: "https://docs.google.com/presentation/d/1gNvYuDurP26cxZOAyR3YsqK2pmCBLgmoV4RWuK8RlPQ/edit?usp=sharing",
      color: "#FFFFFF",
    },
    {
      title: "Image Processor/Manipulator Program",
      description: "Program which supports loading, exporting, filtering, and color transformations for images in commonly used formats. A Swing GUI and batch scripting interface have been provided for layered manipulation.",
      src: "TryoutCoverImage.png",
      url: "https://www.figma.com/design/LH7fgQmEPZWXfv4iVutq28/Tryout-App?node-id=23-977&t=02ZPs62AzYvygG6v-1",
      color: "#C2491D",
    },
    {
      title: "Mathias Svold and Ulrik Hasemann",
      description: "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
      src: "house.jpg",
      url: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
      color: "#B62429",
    },
    {
      title: "Mark Rammers",
      description: "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote. Titled ‘Beginnings’, the mesmerizing collection of images is a visual and meditative journey into the origins of regrets and the uncertainty of stepping into new unknowns.",
      src: "cactus.jpg",
      url: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
      color: "#88A28D",
    },
  ];