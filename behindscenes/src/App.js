import logo from './logo.svg';
import './App.css';
import {useCallback, useState} from 'react';
import DemoOutput from "./Demo/DemoOutput";
import Button from "./UI/Button/Button";
import Card from "./UI/Card/Card";
import ForwardCounter from './Demo/ForwardCounter'
import BackwardCounter from "./Demo/BackwardCounter";

function App() {

  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const buttonClickHandler = useCallback(() => {
    if(allowToggle) {
      setShowParagraph(prevShowParagraph => !prevShowParagraph);
    }
  }, [allowToggle]);

  const toggleClickHandler = () => {
    setAllowToggle( prevAllowToggle => !prevAllowToggle);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <DemoOutput show={false}/>
        <ForwardCounter/>
        <BackwardCounter/>
        <Card>
        <Button onClick={toggleClickHandler}>Allow Toggling</Button>
          <button onClick={buttonClickHandler} style={{backgroundColor: "#282c34",
            color: "white",
            padding: "40px",
            fontfamily: "Arial",
            textalign: "center"}}>Set Anchor</button>
        </Card>
      </header>
    </div>
  );
}

export default App;
