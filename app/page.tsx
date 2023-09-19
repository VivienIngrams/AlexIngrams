import Link from "next/link"
import Image from "next/legacy/image"

import OpenResume from "./components/OpenResume"

export default function Home() {
  return (
    <div className="flex-col items-center justify-end">
      <div className="flex justify-end xl:col-span-2 items-end">
    
        <div className="flex flex-col items-end">
          <div className="flex-grow"><div className="mb-3 rounded bg-black h-[130px] w-[100px] px-auto shadow-xl shadow-neutral-400">
        <Image
          className=" rounded"
          src="/images/profile-r.png"
          height={130}
          width={100}
          objectFit="cover"
          layout="fixed"
          alt="Alex Ingrams"
        />
      </div></div>
        
          <h3 className="py-4 font-playfair underline decoration-yellow-600 text-right decoration-2 text-5xl leading-8 tracking-tight text-black">
            Alex Ingrams
          </h3>
        </div>
      </div>
      <div className="text-base md:text-lg max-w-none font-khand text-neutral-500 pt-2 text-right md:ml-20 md:pl-20 md:pb-5">
        <div>
          <p>
            Assistant professor in the Institute of Public Administration at
            Leiden University,
          </p>
          <p>
            researching the role of transparency and technology in public
            administration and policy.
          </p>
        </div>
      </div>
      <div className="items-center text-center xl:col-span-2 py-4">
        <Link
          className="mx-10 rounded border-2 shadow-xl shadow-neutral-400 border-yellow-600 bg-neutral-100 px-4 py-2 font-khand font-bold text-black "
          href="/projects"
        >
          Current Research
        </Link>
        <OpenResume />
      </div>
    </div>
  )
}
