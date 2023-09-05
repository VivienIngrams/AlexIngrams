import GoogleScholar from "./google-scholar.svg";
import Linkedin from "./linkedin.svg";
import Twitter from "./twitter.svg";
import ResearchGate from "./researchgate.svg";
import Github from "./github.svg";

import Image from "next/image";

const Socials = [
  { src: GoogleScholar, href: "https://scholar.google.nl/citations?user=SA91dyQAAAAJ&hl=en" },
  { src: Linkedin, href: "https://www.linkedin.com/in/aringrams/?originalSubdomain=nl" },
  { src: Twitter, href: "https://twitter.com/alexingrams" },
  { src: ResearchGate, href: "https://www.researchgate.net/profile/Alex-Ingrams" },
  { src: Github, href: "https://www.github.com/alexingrams" }
];

const SocialIcons = () => {
  return (
    <>
      {Socials.map((social, index) => (
        <a
          key={index}
          target="_blank"
          href={social.href}
          rel="noopener noreferrer"
        >
          <Image alt="Social Icon" src={social.src} width={15} height={15} />
        </a>
      ))}
    </>
  );
};

export default SocialIcons;
