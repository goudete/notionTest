import logo from './logo.svg';
import './App.css';
import { InputGroup, Button } from "@blueprintjs/core";
import axios from 'axios';

// const API_URL = 
const DB_ID = '0436de4a74694b59a08d3af173716016';
const AUTH_TOKEN = 'secret_cUDXqUuZHRpGKgdrke32HqXfqY3IG6ng7kdhZip2Xk5';

function App() {
  // addEntry function
  const addEntry = () => {
    //grab input & sanitize

    // call notion api
    axios.post()
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="content">
          <p>
            Goldendoodle puppy name suggestions
          </p>

          <InputGroup
            placeholder="chango"
            rightElement={<Button rightIcon="arrow-right" intent="success" text="Submit" onClick={addEntry} />}
            large
            // fill

          />
        </div>
      </header>
    </div>
  );
}

export default App;
