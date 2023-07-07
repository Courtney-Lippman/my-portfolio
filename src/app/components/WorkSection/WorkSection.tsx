import Image from "next/image";
import "./WorkSection.css";
import streamrImg from "../../../images/streamr.png";
import boardGameImg from "../../../images/boardgameimg.png";
import whatsCookinImg from "../../../images/whatsCookinImg.png";
import sipAndReadImg from "../../../images/sipAndReadImg.png";

const WorkSection = () => {
  const projects = [
    {
      title: "Streamr",
      image: streamrImg,
      link: "https://github.com/streamr-turing/streamr-fe"
    },
    {
      title: "Board Game Bonanza",
      image: boardGameImg,
      link: "https://github.com/Courtney-Lippman/board-game-bonanza"
    },
    {
      title: "What's Cookin Good Lookin",
      image: whatsCookinImg,
      link: "https://github.com/Courtney-Lippman/whats-cookin-good-lookin"
    },
    {
      title: "Sip and Read",
      image: sipAndReadImg,
      link: "https://github.com/Courtney-Lippman/sip-and-read"
    }
  ];

  return (
    <section className="my-20">
      <h1 className="text-center text-xl mb-14">Recent Projects</h1>
      <section className="grid grid-flow-row grid-cols-2 gap-5">
        {projects.map((project) => (
          <div className="image-container">
            <a href={project.link}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="image rounded-2xl m-3"
              />
            </a>
          </div>
        ))}
      </section>
    </section>
  );
};

export default WorkSection;
