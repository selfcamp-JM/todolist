import React, { Component } from 'react';
import Todoinput from   "./Components/Todoinput";
import Todolist from   "./Components/Todolist";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

class App extends Component {
  render() {
    return (
      <div className="container">
      <div className="row">
      <div className="col-10 mx-auto col-md-8 mt-4" >
         <h3 className="text-capitilize text-center">Todo Input</h3>       
        < Todoinput/>
       < Todolist/>
      </div>
      </div>
      </div>
      
    );
  }
}

export default App;
