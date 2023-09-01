import Link from "next/link";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";



export default function Home() {
  return (
        <div className="flex-col items-center">
          <div className=" flex flex-col items-end xl:col-span-2 ">
          <Image
            src="/images/profile.png" // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={100} // Desired size with correct aspect ratio
            alt="Alex Ingrams"
          />
            <h3 className=" py-4 font-khand underline decoration-yellow-600 decoration-2 text-5xl leading-8 tracking-tight text-black ">
              Alex Ingrams
            </h3>
          </div>
          <div className="text-sm md:text-md max-w-none font-inter text-neutral-500 pt-2 text-right md:ml-20 md:pl-20 md:pb-5">
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
              className="mx-10 rounded border-2 border-yellow-600 bg-neutral-100 px-4 py-2 font-khand font-bold text-black "
              href="/projects"
            >
              Current Research
            </Link>
            <button className="m-10 rounded border-2 border-yellow-600 bg-neutral-100 px-4 py-2 font-khand font-bold  text-black  ">
              Resume
            </button>
          </div>
        </div>

 
  );
}
