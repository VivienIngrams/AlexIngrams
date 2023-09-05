import GoogleScholar from "./google-scholar.svg";
import Linkedin from "./linkedin.svg";
import Twitter from "./twitter.svg";
import ResearchGate from "./researchgate.svg";
import Github from "./github.svg";

import Image from "next/image";

const components = {
  googleScholar: GoogleScholar,
  linkedin: Linkedin,
  twitter: Twitter,
  researchGate: ResearchGate,
  github: Github,
};

const SocialIcons = () => {
  return (
    //   <SocialIcon
    //   kind="googleScholar"
    //   href="https://scholar.google.nl/citations?user=SA91dyQAAAAJ&hl=en"
    //   size="6"
    // />
    // <SocialIcon
    //   kind="linkedin"
    //   href="https://www.linkedin.com/in/aringrams/?originalSubdomain=nl"
    //   size="6"
    // />
    // <SocialIcon
    //   kind="twitter"
    //   href="https://twitter.com/alexingrams"
    //   size="6"
    // />
    // <SocialIcon
    //   kind="researchGate"
    //   href="https://www.researchgate.net/profile/Alex-Ingrams"
    //   size="6"
    // />
    // <SocialIcon
    //   kind="mail"
    //   href="mailto:a.r.ingrams@fgga.leidenuniv.nl"
    //   size="6"
    // />
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.github.com/alexingrams"
    >
      <Image alt="Github" src={Github} width={15} height={15} />
    </a>
  );
};

export default SocialIcons;
