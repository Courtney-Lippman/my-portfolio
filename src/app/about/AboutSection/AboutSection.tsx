import Image from "next/image";
import trailImg from "../../../images/trail.jpg";
import "./AboutSection.css";

export default function AboutSection() {
  return (
    <main className="flex flex-col items-center">
      <h1>About Me</h1>
      <div className="image-container">
        <Image
          src={trailImg}
          alt="Mountain trail leading to Aspen trees"
          fill
          className="image rounded-2xl m-3"
        />
      </div>
      <div className="w-1/2">
        <p>
          As a front-end engineer, I create high-quality, accessible, and
          innovative software using React, Typescript, HTML, and CSS. I
          graduated from the Turing School of Software & Design, an intensive,
          ACCET-accredited software development program. I have experience with
          testing, documentation, and agile methodology. I have accumulated over
          1800 hours of programming experience in 7 months, working on various
          projects that demonstrate my skills and creativity. Before switching
          to software engineering, I spent 7+ years in the healthcare industry
          as a medical assistant and an optometric technician, working with
          exceptional medical teams and caring for diverse patients. I have a
          degree in Integrative Physiology from the University of Colorado
          Boulder, which gave me a solid foundation in human anatomy,
          physiology, and health. My healthcare background has taught me how to
          work in fast-paced and dynamic settings, communicate effectively with
          diverse stakeholders, and adapt to changing needs and challenges. I
          aim to leverage my software engineering skills and healthcare
          knowledge to develop meaningful software solutions that can positively
          impact society. I am excited to collaborate with other software
          engineers, learn from their feedback and insights, and contribute to
          the growth and success of the software industry. I am always eager to
          learn new technologies, tools, and best practices and apply them to
          real-world problems. When not coding, I enjoy immersing myself in
          nature through mountain biking and volunteering as a backcountry ski
          patroller. I would love to connect with you and explore opportunities
          to work together. Please feel free to reach out to me anytime!
        </p>
      </div>
    </main>
  );
}
