import React from "react";

import Card from "../components/Card";
import Link from "next/link";

export default async function Projects() {
  const projectsData = await getData();

  return (
    <>
      <div className="divide-y divide-gray-200 ">
        <div className="flex justify-center space-y-2 p-4">
          <h1 className="inline-block text-center font-khand text-2xl leading-9 tracking-tight text-neutral-500 sm:text-5xl sm:leading-10 md:text-5xl md:leading-14">
            Current Research
          </h1>
          <p className="text-lg leading-7 text-gray-500 "></p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.id}
                title={d.title}
                description={d.description}
                href={d.href}
                linkText={d.linkText}
              />
            ))}
          </div>
        </div>
        <div className=" pb-2 text-yellow-600 font-khand text-right">
          <Link href="/admin">ADMIN</Link>
        </div>
      </div>
    </>
  );
}

async function getData() {
  try {
    const response = await fetch(
      "https://projects-cec6a-default-rtdb.europe-west1.firebasedatabase.app/project.json"
    );
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const data = await response.json();

    const projectsData = [];

    for (const key in data) {
      projectsData.push({
        id: key,
        title: data[key].title,
        description: data[key].description,
        href: data[key].href,
        linkText: data[key].linkText,
      });
    }
    return projectsData;
  } catch (error) {
    console.error(error);
    return [];
  }
}
