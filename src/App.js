import React, { useState } from 'react';
import './App.css';
import { InputGroup, Button } from "@blueprintjs/core";
import axios from 'axios';
import { AppToaster } from './components/toaster';

const API_URL = 'http://localhost:8080/newEntry';


function App() {

  const [name, setName] = useState('');

  const addEntry = async () => {
    if (name === '') {
      AppToaster.show({
        message: 'Empty input',
        intent: 'danger'
      })
      return;
    }

    try {
      const response = await axios.post(API_URL, {
        nameSuggestion: name
      });

      if (response?.data?.message != null) {
        AppToaster.show({
          message: 'Successfuly Submitted!',
          intent: 'success'
        })
      } else {
        AppToaster.show({
          message: 'Error in request',
          intent: 'danger'
        })
      }

    } catch (error) {
      AppToaster.show({
        message: 'Error in request',
        intent: 'danger'
      })
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="content">
          <h2>
            Help me name my new Goldendoodle puppy!
          </h2>
          <p>
            Name Suggestions
          </p>
          <InputGroup
            placeholder="puppy name"
            onChange={ (e) => setName(e.target.value) }
            rightElement={<Button rightIcon="arrow-right" intent="success" text="Submit" onClick={addEntry} />}
            large
          />
        </div>
      </header>
    </div>
  );
}

export default App;
