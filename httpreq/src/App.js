import './App.css';
import {BrowserRouter} from "react-router-dom";

import Blog from './Containers/Blog/Blog'

function App() {
  return (
      <BrowserRouter>
          <div>
              <Blog/>
          </div>
      </BrowserRouter>
  );
}

export default App;
