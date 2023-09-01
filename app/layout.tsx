import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
// import Logo from './alpha-logo.svg'

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <div className="flex h-screen flex-col justify-between pt-5 text-yellow-600 sm:pb-10">
          <header className="flex w-full items-center justify-between">
            <div>
              <Link href="/" aria-label='Alex-Homepage'>
                <div className="flex items-center justify-between">
                  <div className="mr-3">
                    {/* <Logo /> */}
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex items-center text-base  leading-5">
              {/* <div className="">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-semibold uppercase text-yellow-600 dark:text-gray-100 sm:p-4 sm:text-xl"
                >
                  {link.title}
                </Link>
              ))}
            </div> */}
            </div>
          </header>
          <main>{children}</main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
