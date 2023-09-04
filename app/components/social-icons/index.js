import GoogleScholar from './google-scholar.svg'
import Linkedin from './linkedin.svg'
import Twitter from './twitter.svg'
import ResearchGate from './researchgate.svg'
import Github from './github.svg'

import Image from 'next/image'

// Icons taken from: https://simpleicons.org/

const components = {
  googleScholar: GoogleScholar,
  linkedin: Linkedin,
  twitter: Twitter,
  researchGate: ResearchGate,
  github: Github
}

const SocialIcons = ({ href, kind, size }) => {

  const SocialSvg = components[kind]

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
    // <a
    //   className="text-sm text-gray-500 transition hover:text-gray-600"
    //   target="_blank"
    //   rel="noopener noreferrer"
    //   href={href}
    // >

      <Image kind="googleScholar"
    href="https://scholar.google.nl/citations?user=SA91dyQAAAAJ&hl=en"
    size="6"
        className={`fill-[#ca8a04] text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-8 w-8`}
      />
    // </a>
  )
}

export default SocialIcons
