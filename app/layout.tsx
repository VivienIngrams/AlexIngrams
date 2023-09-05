import "./globals.css";
import type { Metadata } from "next";
import { Inter, Khand } from "next/font/google";
import Link from "next/link";
import Logo from "./alpha-logo.svg";
import Image from "next/image";
import SocialIcons from "./components/social-icons/index"

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const khand = Khand({
  weight: ["400"],
  variable: "--font-khand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Ingrams",
  description:
    "Assistant professor in the Institute of Public Administration at Leiden University, researching the role of transparency and technology in public administration and policy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` min-h-screen ${khand.variable} ${inter.variable}`}>
        <div className="xl:max-w-8xl mx-auto max-w-5xl px-4 sm:px-6 xl:px-0">
          <div className="flex h-screen flex-col justify-between pt-5 sm:pb-10">
            <header className="flex w-full items-center justify-between">
              <div>
                <Link href="/" aria-label="Alex-Homepage">
                  <div className="flex items-center justify-between">
                    <div>
                      <Image
                        priority
                        src={Logo}
                        width={60}
                        height={60}
                        alt="Alex's HomePage"
                      />
                    </div>
                    <p className="font-khand text-yellow-600 pt-3 -ml-2">
                      HOME
                    </p>
                  </div>
                </Link>
              </div>
              <div className="flex items-center text-base leading-5"></div>
            </header>
            <main className="flex flex-col items-center">{children}</main>
            <footer>
              <div className="flex flex-col items-center">
                <div className="mb-3 flex space-x-4">
                 <SocialIcons />
                </div>
                <div className="mb-2 flex flex-col items-center text-yellow-600 space-x-2 text-sm text-gray-600 ">
                  <Link href="mailto:a.r.ingrams@fgga.leidenuniv.nl">
                    a.r.ingrams@fgga.leidenuniv.nl
                  </Link>
                </div>
                <div className=" text-center text-sm font-medium text-neutral-500 ">
                  <Link href="https://www.universiteitleiden.nl/en/staffmembers/alex-ingrams#tab-1">
                    Leiden University Institute of Public Administration
                    <p>The Netherlands</p>
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
