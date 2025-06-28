export interface Project {
    title: string;
    description: string;
    src: string;
    url: string;
    color: string;
  }
  
  export const projects: Project[] = [
    {
      title: "Spotify Feature Update Design (Fall 2023)",
      description: "A user interface designed prototype of a new Spotify feature that allows users to have more convenience when discovering new music. The design focuses on enhancing user experience and engagement through a simple and intuitive interface.",
      src: "SpotifyUpdateCover.png",
      url: "https://www.figma.com/design/C9WM2xpic8ej9Q7qfJyFPP/IxD-Project-2---Ousman-Jobe?node-id=38-2096&t=YTx9a7y3udUY3VHL-1",
      color: "#BBACAF",
    },
    {
      title: "Northeastern University Student Hub Redesign",
      description: "A web redesign of Northeastern University's Student Hub, with more appealing aesthetics, the removal of unnecessary content, less misleading web directions, and easier accessibility features such as a pinned links panel.",
      src: "HubRedesignCover.png",
      url: "https://docs.google.com/presentation/d/1gNvYuDurP26cxZOAyR3YsqK2pmCBLgmoV4RWuK8RlPQ/edit?usp=sharing",
      color: "#977F6D",
    },
    {
      title: "Tryout",
      description: "Tryout is a mobile app designed to estimate travel time on a MBTA’s mode of transit and suggest social or personal care activities to engage in while on the move. Passengers can collect points through user-to-user confirmation to win travel prizes.",
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