import React, { Component } from 'react';
import Todoinput from   "./Components/Todoinput";
import Todolist from   "./Components/Todolist";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

class App extends Component {
  render() {
    return (
      <div >
       App main
       < Todoinput/>
       < Todolist/>
      </div>
    );
  }
}

export default App;
