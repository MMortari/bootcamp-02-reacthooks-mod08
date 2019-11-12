import React, { useState, useEffect, useMemo } from "react";

/**
 * useState
 * Utilizado para a criação de variáveis de estado na aplicação
 * const [techs, setTechs] = useState([]); // Techs iniciará com [];
 */
/**
 * useEffect
 * Utilizado como ciclo de vida da aplicação
 * useEffet(() => {}, []) // 1º Parametro -> Função que vai ser executada
 *                        // 2º Parametro -> Quando ela deve ser executada
 */
/**
 * useMemo
 * Utilizado quando há uma necessidade de um cálculo baseado em uma variável de estado
 * const techSize = useMemo(() => techs.length, [techs]) // 1º Parametro -> Função que vai ser executada e o resultado armazenado na variável techSize
 *                                                       // 2º Parametro -> Quando ela deve ser executada
 */

function App() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTechs([ ...techs, newTech ]);
    setNewTech('');
  }

  useEffect(() => {
    // Nesse exemplo, a função será executada quando o componente for montado em tela, semelhante ao componentDidMount
    const tech = localStorage.getItem('techs');

    if(tech) {
      setTechs(JSON.parse(tech));
    }
  }, [])

  useEffect(() => {
    // Nesse exemplo, a função será executada quando o componente deixar de ser montado, semelhante ao componentWillUnmount
    return () => {
      localStorage.removeItem('techs');
    }
  }, [])

  useEffect(() => {
    // Nesse exemplo, a função será executada toda vez que houver alteração na variável techs
    localStorage.setItem('techs', JSON.stringify(techs))
  }, [techs]); 

  const techSize = useMemo(() => techs.length, [techs])

  return (
    <>
      <input type="text" value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>Add</button><br />
      <strong>Você tem {techSize} tecnologias</strong>
      <ul>
        {techs.map(tech => <li key={tech}>{tech}</li>)}
      </ul>
    </>
  );
}

export default App;
