import React from 'react';

import Header from './components/Header'

function App() {
  const projects = ['Desenvolvimento de app', 'Front'];

  return (
    <>
      <Header title="HomePage">
        <ul>
          <li>Homepage</li>
          <li>Project</li>
        </ul>
      </Header>
      <Header title="projects">
        <ul>
          <li>Homepage</li>
          <li>Projects</li>
          <li>Login</li>
        </ul>
      </Header>
    </>
  )
}

export default App;