import logo from './logo.svg';
import './App.css';
// Assma:
import { toto, toto2 } from './tp1_refaire_imports';
import tan from './tp1_bis_refaire_imports_default';

function App() {
  return (

    <div>
      <h2>Import simple :</h2>
      {toto[0].name} et {toto2[0].name}
      <h2>Import par défaut :</h2>
      {tan[0].name}
    </div>
    
    // <div className="App">             {/* Ce classname fait reference au App dans css */}
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
