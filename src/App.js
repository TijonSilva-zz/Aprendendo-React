import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';


import Header from './components/Header';
import { response } from 'express';

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response);
    })
  }, []);

  function handleAddProject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`])
  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map(project => <li key={project} > {project}</li>)}
      </ul>

      <button type="butoon" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  )
}

export default App;