import React, { useState } from "react";
import Header from "./components/Header";

const App = () => {
  const [projects, setProjects] = useState([]);

  const handleAddProject = () => {
    setProjects([...projects, `New Project ${Date.now()}`]);
  };

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map((project) => (
          <li key={projects.indexOf(project)}>{project}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Add Project
      </button>
    </>
  );
};

export default App;
