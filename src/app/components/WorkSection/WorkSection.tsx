import "./WorkSection.css";

const WorkSection = () => {
  const projects = [
    {
      title: "Streamr",
      image: "Hello;",
      link: "https://github.com/streamr-turing/streamr-fe"
    },
    {
      title: "Board Game Bonanza",
      image: "Hello;",
      link: "https://github.com/Courtney-Lippman/board-game-bonanza"
    },
    {
      title: "What's Cookin Good Lookin",
      image: "Hello;",
      link: "https://github.com/Courtney-Lippman/whats-cookin-good-lookin"
    },
    {
      title: "Sip and Read",
      image: "Hello;",
      link: "https://github.com/Courtney-Lippman/sip-and-read"
    },
    {
      title: "Pomodori Putridi",
      image: "Hello;",
      link: "https://github.com/Courtney-Lippman/sip-and-read"
    }
  ];

  return (
    <section>
      <h1>Recent Projects</h1>
      <section className="grid"></section>
    </section>
  );
};

export default WorkSection;
