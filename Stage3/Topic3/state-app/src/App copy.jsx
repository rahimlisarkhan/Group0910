import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  let [count, setCount] = useState(10); //arr
  const [showPanel, setShowPanel] = useState(false);

  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);

  function handleCount() {
    //Method 1
    // const newCount = count + 1;
    // setCount(newCount);

    //Method 2
    // setCount(count + 1);

    //Method 3
    // setCount((prev) => {
    //   return prev + 1;
    // });
    // setCount((prev) => prev + 1);
    // setCount((prev) => prev - 1);

    // count = count + 1
    setCount((prev) => (prev <= 0 ? 0 : prev - 1));
  }

  function handlePanelShow() {
    const newValue = !showPanel;

    setShowPanel(newValue);
  }

  function handleTeam() {
    const newTeam1 = [
      'Tural',
      'Musa',
      'Raqsana',
      'Camila',
      'Sema',
      'Murad',
      'Ramil',
      'Narmin',
    ];

    let newTeam2 = [];

    for (let i = 0; i <= newTeam1.length / 2 + 1; i++) {
      const silinenOyuncu = newTeam1.pop();
      newTeam2.push(silinenOyuncu);
    }

    console.log('newTeam1', newTeam1);
    console.log('newTeam2', newTeam2);

    setTeam1(newTeam1);
    setTeam2(newTeam2);
  }

  // const totalPower1 = team1.reduce((sum,item)=>sum+item.count)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img
            src={showPanel ? viteLogo : 'https://'}
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          {count <= 5 ? (
            <img src={reactLogo} className="logo react" alt="React logo" />
          ) : (
            'hooray!'
          )}
        </a>
      </div>
      <h1>Vite + React {count}</h1>
      <div className={`card ${showPanel ? 'card-red' : ''}`}>
        <button onClick={handleCount}> Artir</button>
        <button onClick={handlePanelShow}>Toggle</button>
        <button onClick={handleTeam}>Team</button>

        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {showPanel && (
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        )}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
