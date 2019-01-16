import React, { Component } from "react";
import Todoitem from "./Todoitem";


export default class Todolist extends Component {
   render(){
       return(
           <div>
            <ul className="list-group my-5">
              <h3 className="text-capitalize text-center">
              todo list
              </h3>
              < Todoitem/>
              <button type="submit" 
                    className="btn btn-block btn-danger mt-3 text-capitalize">
                    delete task 
                  </button>
            </ul>

           </div>
       )
   }
}