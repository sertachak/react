import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import DemoOutput from "./Demo/DemoOutput";

function App() {

  const [showParagraph, setShowParagraph] = useState();

  const buttonClickHandler = () => {
    setShowParagraph(prevShowParagraph => !prevShowParagraph);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <DemoOutput show={false}/>
          <button onClick={buttonClickHandler} style={{backgroundColor: "#282c34",
            color: "white",
            padding: "40px",
            fontfamily: "Arial",
            textalign: "center"}}>Set Anchor</button>
      </header>
    </div>
  );
}

export default App;
