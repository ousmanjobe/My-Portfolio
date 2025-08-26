export interface Project {
    title: string;
    description: string;
    src: string;
    url: string;
    color: string;
  }
  
  export const projects: Project[] = [
    {
      title: "Portfolio Website (Fall 2024)",
      description: "This is an interactive and aesthetically pleasing online portfolio consisting of my art and design projects as well as a means of accessing my software projects on GitHub. It includes information about myself, values, thought process, and sources of inspiration. My creative nature should be conveyed through the website’s design as well.",
      src: "NextJS.png",
      url: "https://www.figma.com/design/xgRpBvNvnH6wh2m5dw3bao/Home-Page?node-id=0-1&t=GnhUBl9onKSVbvev-1",
      color: "#525B79",
    },
    {
      title: "Spotify Feature Update Design (Fall 2023)",
      description: "A user interface designed prototype of a new Spotify feature that allows users to have more convenience when discovering new music. The design focuses on enhancing user experience and engagement through a simple and intuitive interface.",
      src: "SpotifyUpdateCover.png",
      url: "https://www.figma.com/design/C9WM2xpic8ej9Q7qfJyFPP/IxD-Project-2---Ousman-Jobe?node-id=38-2096&t=YTx9a7y3udUY3VHL-1",
      color: "#8690B9",
    },
    {
      title: "Tryout (Fall 2023)",
      description: "Tryout is a mobile app designed to estimate travel time on a MBTA’s mode of transit and suggest social or personal care activities to engage in while on the move. Passengers can collect points through user-to-user confirmation to win travel prizes.",
      src: "TryoutCoverImage.png",
      url: "https://www.figma.com/design/LH7fgQmEPZWXfv4iVutq28/Tryout-App?node-id=23-977&t=02ZPs62AzYvygG6v-1",
      color: "#9FC3EE",
    },
    {
      title: "Northeastern University Student Hub Redesign (Fall 2022)",
      description: "A web redesign of Northeastern University's Student Hub, with more appealing aesthetics, the removal of unnecessary content, less misleading web directions, and easier accessibility features such as a pinned links panel.",
      src: "HubRedesignCover.png",
      url: "https://docs.google.com/presentation/d/1gNvYuDurP26cxZOAyR3YsqK2pmCBLgmoV4RWuK8RlPQ/edit?usp=sharing",
      color: "#BBACAF",
    },
  ];