import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { InputGroup, Button } from "@blueprintjs/core";
import axios from 'axios';
import { AppToaster } from './components/toaster';


const API_URL = 'https://api.notion.com/v1/pages';
const DB_ID = '8a21fed1d335433cb34698ea206f2a75';
const AUTH_TOKEN = 'secret_cUDXqUuZHRpGKgdrke32HqXfqY3IG6ng7kdhZip2Xk5';

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
          'Access-Control-Allow-Origin': '*',
        }
      });
    if (response.id) {
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
        <img src={logo} className="App-logo" alt="logo" />
        <div className="content">
          <p>
            Goldendoodle puppy name suggestions
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
