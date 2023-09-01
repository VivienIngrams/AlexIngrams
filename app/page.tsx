import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-neutral-200">
        <div className="flex-col items-center">
          <Image
            src="/images/profile.png" // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={100} // Desired size with correct aspect ratio
            alt="Alex Ingrams"
          />
          <div className=" flex flex-col items-end xl:col-span-2 ">
            <h3 className=" pt-10 font-playfair text-5xl leading-8 tracking-tight text-black md:pt-40">
              Alex Ingrams
            </h3>
          </div>
          <div className="prose max-w-none pt-2 text-right font-khand md:ml-20 md:pl-20 md:pb-10">
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
          <div className="flex-grow items-center text-center xl:col-span-2">
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
      </div>
    </main>
  );
}
