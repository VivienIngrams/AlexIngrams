"use client";

import { useState } from "react";

import auth, { database } from "../../firebase";
import { ref, set, push } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";

import LoginForm from "../components/admin/LoginForm";
import AddProject from "../components/admin/AddProject";
import EditProjects from "../components/admin/EditProjects";

function AdminPage() {
  const [logIn, setLogIn] = useState(false);
  const [message, setMessage] = useState("");
  
  const monitorAuthState = async () => {
    onAuthStateChanged(auth, user => {
      if(user) {
        setLogIn(true)
      }
    })
  }
  monitorAuthState()

  async function addProjectHandler(project) {
    try {
      const newProjectRef = push(ref(database, "project"));
      const newProjectId = newProjectRef.key;

      await set(newProjectRef, project);

      setMessage("Successfully added project to database");
    } catch (error) {
      console.error("Error adding project:", error);
      setMessage("Unable to add project to database");
    }
  }

  return (
    <div className="flex-col items-center">
      <div className=" flex flex-col items-end xl:col-span-2 ">
        {!logIn && <LoginForm />}
        {logIn && (
          <>
            <AddProject onAddProject={addProjectHandler} message={message} />
            <EditProjects/>
          </>
        )}
      </div>
    </div>
  );
}

export default AdminPage;
