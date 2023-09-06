import React, { useState } from "react"

import { database } from "../../../firebase"
import { update, ref, remove } from "firebase/database"

function ProjectForm({ project, onUpdate, onDelete }) {
  const [editedProject, setEditedProject] = useState(project)
  const [message, setMessage ] = useState('')

  const handleInputChange = (field, value) => {
    setEditedProject((prevProject) => ({
      ...prevProject,
      [field]: value,
    }))
  }

  const handleSaveClick = async () => {
    try {
      const projectPath = `project/${project.id}`
      const dbRef = ref(database, projectPath)
      await update(dbRef, editedProject)
      setMessage("Successfully updated project in the database!")
      onUpdate(editedProject)
    } catch (error) {
      console.error("Error updating project:", error)
    }
  }

  const handleDeleteClick = async () => {
    try {
      const projectPath = `project/${project.id}`
      const dbRef = ref(database, projectPath)
      await remove(dbRef)
      setMessage("Successfully deleted project in the database!")
      onDelete(project.id)
    } catch (error) {
      console.error("Error deleting project:", error)
    }
  }

  return (
    <form key={project.id} className="flex flex-col items-end">
      <div className="p-5">
        <label
          className="p-2 font-bold font-normal text-black"
          htmlFor={`title-${project.id}`}
        >
          Title
        </label>
        <textarea
          className="w-80 rounded-md border-yellow-600 px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 "
          rows="4"
          id={`title-${project.id}`}
          value={editedProject.title}
          onChange={(event) => handleInputChange("title", event.target.value)}
        />
      </div>
      <div className="p-5">
        <label
          className="p-2 font-bold font-normal text-black"
          htmlFor={`description-${project.id}`}
        >
          Description
        </label>
        <textarea
          className="w-80 rounded-md border-yellow-600 px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600"
          rows="8"
          id={`description-${project.id}`}
          value={editedProject.description}
          onChange={(event) =>
            handleInputChange("description", event.target.value)
          }
        />
      </div>
      <div className="p-5">
        <label
          className="p-2 font-bold font-normal text-black"
          htmlFor={`link-${project.id}`}
        >
          Link
        </label>
        <input
          className="w-80 rounded-md border-yellow-600 px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 "
          type="text"
          id={`link-${project.id}`}
          value={editedProject.href}
          onChange={(event) => handleInputChange("href", event.target.value)}
        />
      </div>
      <div className="p-5">
        <label
          className="p-2 font-bold font-normal text-black"
          htmlFor={`link-text-${project.id}`}
        >
          Text for link
        </label>
        <textarea
          className="w-80 rounded-md border-yellow-600 px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 "
          rows="1"
          id={`link-text-${project.id}`}
          value={editedProject.linkText}
          onChange={(event) =>
            handleInputChange("linkText", event.target.value)
          }
        />
      </div>
      <div className="m-5 text-center text-yellow-600">
            <p>{message}</p>
          </div>
      <div className="mb-20 flex flex-row justify-between">
        <div className="mb-10 rounded-2xl bg-yellow-600 p-2">
          <button
            className="rounded-2xl text-center text-white"
            type="button"
            onClick={handleSaveClick}
          >
            Save Project
          </button>
        </div>
        <div className="mx-5 mb-10 rounded-2xl bg-red-700 p-2">
          <button
            className="rounded-2xl text-center text-white
            "
            type="button"
            onClick={handleDeleteClick}
          >
            Delete Project
          </button>
        </div>
      </div>
    </form>
  )
}

export default ProjectForm
