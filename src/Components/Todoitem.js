import React, { Component } from "react";

export default class Todoitem extends Component {
   render(){
       const{title,updateItem,deleteItem}=this.props;
       return(
           <div>
               <li className="list-group-item text-capitalize
                d-flex justify-content-between my-2">
                <h6>{title}</h6>
                <div className="todo-icon" >
                <span className="mx-2 text-success" >
                <i className="fas fa-pen" onClick ={updateItem}/>
                </span>
                <span className="mx-2 text-danger">
                <i className="fas fa-trash" onClick ={deleteItem}/>
                </span>
                </div>
                </li>
           </div>
       )
   }
}