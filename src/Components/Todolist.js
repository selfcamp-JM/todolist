import React, { Component } from "react";
import Todoitem from "./Todoitem";


export default class Todolist extends Component {
   render(){
    const{items,clearList} =this.props;
    return(
           <div>
            <ul className="list-group my-5">
              <h3 className="text-capitalize text-center">
              todo list
              </h3>{ items.map(item =>{
                return (
                    < Todoitem key={item.id} title ={item.title} />
                )
              })}
              
              <button type="submit" 
                    className="btn btn-block btn-danger mt-3 text-capitalize" onClick={clearList}>
                    delete task 
                  </button>
            </ul>

           </div>
       )
   }
}