import React, { useState, useEffect } from "react";
import { database } from "../../../firebase";
import { update, ref, get, child, remove } from "firebase/database";
import ProjectForm from "./ProjectForm";

function EditProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbRef = ref(database);
        const snapshot = await get(child(dbRef, "project"));
        if (snapshot.exists()) {
          const data = snapshot.val();
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
          setProjects(projectsData);
          console.log(projectsData);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleUpdateProject = (updatedProject) => {
    const updatedProjects = projects.map((project) =>
      project.id === updatedProject.id ? updatedProject : project
    );
    setProjects(updatedProjects);
  };

  const handleDeleteProject = async (projectId) => {
    // Implement your project deletion logic here

    // After deleting, update the state
    const updatedProjects = projects.filter(
      (project) => project.id !== projectId
    );
    setProjects(updatedProjects);
  };

  return (
    <div className="flex flex-col justify-around">
      <div>
        <h2 className="p-4 text-center font-khand text-2xl font-bold text-neutral-500">
          Edit Research Projects
        </h2>

        {projects.map((project) => (
          <ProjectForm
            key={project.id}
            project={project}
            onUpdate={handleUpdateProject}
            onDelete={handleDeleteProject}
          />
        ))}
      </div>
    </div>
  );
}

export default EditProjects;
