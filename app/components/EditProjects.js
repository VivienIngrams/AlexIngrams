import React, { useState, useEffect } from "react";
import { database } from "../../firebase";
import { update, ref, get, child, remove } from "firebase/database";

function EditProjects() {
  const [projects, setProjects] = useState([]);
  const [editedProject, setEditedProject] = useState({
    id: "",
    title: "",
    description: "",
    href: "",
    linkText: "",
  });

  // Fetch the projects data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbRef = ref(database);
        const snapshot = await get(child(dbRef, "project"));
        if (snapshot.exists()) {
          const data = snapshot.val();
          const projectsData = Object.values(data);
          setProjects(projectsData);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Handle input changes for the edited project
  const handleInputChange = (field, value) => {
    setEditedProject((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  // Handle selecting a project for editing
  const handleSelectProject = (project) => {
    setEditedProject(project); // Set editedProject to the selected project
    handleEditClick()
  };

  // Handle editing a project
  const handleEditClick = async () => {
    try {
      const projectPath = `project/${editedProject.id}`;
      const updates = {
        [projectPath]: editedProject,
      };
      const dbRef = ref(database, projectPath)
      update(dbRef, editedProject)
      console.log("Successfully updated project in the database!");
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  // Render the form with project data
  return (
    <div className="flex flex-col justify-around sm:flex-row">
      <form>
        <h2 className="p-4 text-center font-khand text-2xl font-bold text-neutral-500">
          Edit Research Projects
        </h2>

        {projects.map((project) => (
          <div className="flex flex-col items-end" key={project.id}>
            <div className="p-5">
              <label
                className="p-2 font-bold font-normal text-black"
                htmlFor="title"
              >
                Title
              </label>
              <textarea
                className="w-80 rounded-md border-yellow-600 px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
                rows="4"
                id="title"
                value={editedProject.title} // Use editedProject values for editing
                onChange={(event) =>
                  handleInputChange("title", event.target.value)
                }
              />
            </div>
            <div className="p-5">
              <label
                className="p-2 font-bold font-normal text-black"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="w-80 rounded-md border-yellow-600 px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
                rows="8"
                id="description"
                value={editedProject.description} // Use editedProject values for editing
                onChange={(event) =>
                  handleInputChange("description", event.target.value)
                }
              />
            </div>
            <div className="p-5">
              <label
                className="p-2 font-bold font-normal text-black"
                htmlFor="link"
              >
                Link
              </label>
              <input
                className="w-80 rounded-md border-yellow-600 px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
                type="text"
                id="link"
                value={editedProject.href} // Use editedProject values for editing
                onChange={(event) =>
                  handleInputChange("href", event.target.value)
                }
              />
            </div>
            <div className="p-5">
              <label
                className="p-2 font-bold font-normal text-black"
                htmlFor="link-text"
              >
                Text for link
              </label>
              <textarea
                className="w-80 rounded-md border-yellow-600 px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
                rows="1"
                id="link-text"
                value={editedProject.linkText} // Use editedProject values for editing
                onChange={(event) =>
                  handleInputChange("linkText", event.target.value)
                }
              />
            </div>
            <div className="mb-20 flex flex-row justify-between">
              <div className="mb-10 rounded-2xl bg-yellow-600 p-2">
                <button
                  className="rounded-2xl text-center text-black"
                  type="button" // Change type to "button"
                  onClick={() => handleSelectProject(project)} // Select the project for editing
                >
                  Edit Project
                </button>
              </div>
              <div className="mx-5 mb-10 rounded-2xl bg-red-600 p-2">
                <button
                  className="rounded-2xl text-center text-black"
                  type="submit"
                  onClick={() => handleDeleteClick(project)}
                >
                  Delete Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
}

export default EditProjects;
