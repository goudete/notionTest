import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { InputGroup, Button } from "@blueprintjs/core";
import axios from 'axios';
import { AppToaster } from './components/toaster';


const API_URL = '';
const DB_ID = '';
const AUTH_TOKEN = '';

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
    const response = await axios.post(API_URL, {
      "parent": { "database_id": `${DB_ID}` },
      "properties": {
        "Dog Name Suggestions": [
          {
            "text": {
              "content": `${name}`
            }
          }
        ]
      },
      "children": []
    }, {
      headers: {
        'Authorization': `Bearer ${AUTH_TOKEN}`,
        'Content-Type': 'application/json',
      }
    }).catch((e) => {
      console.log(e)
    });

    if (response?.id != null) {
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
            placeholder="chango"
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
