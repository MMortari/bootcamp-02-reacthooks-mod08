import React, { useState } from "react";

/**
 * useState
 * Utilizado para a criação de variáveis de estado na aplicação
 * const [techs, setTechs] = useState([]); // Techs iniciará com [];
 */

function App() {
  const [techs, setTechs] = useState(['React', 'React Native'])
  const [newTech, setNewTech] = useState('')

  function handleAdd() {
    setTechs([ ...tech, newtech ]);
    setNewTech('');
  }

  return (
    <>
      <input type="text" onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>Add</button>
      <ul>
        {techs.map(tech => {
          <li key={tech}>{tech}</li>
        })}
      </ul>
    </>
  );
}

export default App;
