export interface Project {
    title: string;
    description: string;
    src: string;
    url: string;
    color: string;
  }
  
  export const projects: Project[] = [
    {
      title: "Portfolio Website (Summer 2025)",
      description: "This is an interactive and aesthetically pleasing online portfolio consisting of my art and design projects as well as a means of accessing my software projects on GitHub.",
      src: "NextJS.webp",
      url: "https://github.com/ousmanjobe/My-Portfolio",
      color: "#525B79",
      //color: "#E4A2A2",
    },
    {
      title: "Midnight Munchies (Summer 2024)",
      description: "Navigate a zombie-infested Northeastern campus, earn money, and acquire midnight munchies at several checkpoint locations. This game was developed with Unity Engine and C# as part of a team project.",
      src: "MidnightMunchiesCoverImage.webp",
      url: "https://github.com/ousmanjobe/Midnight-Munchies-Game",
      color: "#8690B9",
      //color: "#88A28D",
    },
    {
      title: "Spreadsheet Web App (Fall 2023)",
      description: "A spreadsheet web application with features including formulas, range expressions, cell selection, importing/exporting CSV files, and more. The app is built with React, TypeScript, and uses a custom state management system for handling cell data and formulas.",
      src: "SpreadsheetCoverImage.webp",
      url: "https://github.com/ousmanjobe/Spreadsheet-Web-Application",
      color: "#9FC3EE",
      //color: "#BBACAF",
    },
    
    {
      title: "Image Processor/Manipulator Program (Fall 2022)",
      description: "Program which supports loading, exporting, filtering, and color transformations for images in commonly used formats. A Swing GUI and batch scripting interface have been provided for layered manipulation.",
      src: "ImageProcessorCoverImage.webp",
      url: "https://github.com/ousmanjobe/ImageProcessorProject",
      color: "#BBACAF",
      //color: "#F0C98E",
    },
    
  ];