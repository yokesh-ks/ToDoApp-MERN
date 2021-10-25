import React, { Fragment, useState } from "react";
import axios from "axios";

function EditToDo({todo}){
    const [description, setDescription] = useState(todo.description);

    // edit description
    async function updateDescription(e){
        e.preventDefault();
        try {
          const data = {updateToDo: {
            description: description
          }};
          const response = await axios.put(`/api/v1/todos/${todo._id}`, data)
          window.location = "/";
          console.log(response);
        } 
        catch(error){
            console.log(error.message);
        }
    }

    return(
        <Fragment>
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${todo._id}`}>
            Edit
            </button>
            {/* 
        id 
      */}
    
            <div className="modal" id={`id${todo._id}`}>
            <div className="modal-dialog">
                <div className="modal-content">

  
                <div className="modal-header">
                    <h4 className="modal-title">Edit ToDo</h4>
                    <button type="button" className="close" data-dismiss="modal" onClick={() => setDescription(todo.description)}>&times;</button>
                </div>

                
                <div className="modal-body">
                    <input type="text" className="form-control" value={description} onChange={e=> setDescription(e.target.value)} />
                </div>

                
                <div className="modal-footer">
                    <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={e => updateDescription(e)}>Edit</button>
                    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => setDescription(todo.description)}>Close</button>
                </div>

                </div>
            </div>
            </div>

            
        </Fragment>
    )
}

export default EditToDo;