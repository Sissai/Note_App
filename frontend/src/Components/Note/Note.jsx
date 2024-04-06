import React from "react"
import './Note.css';

const Note = (props) => {
  return (
    <div className="note-container">
      <div className="note-content">
        <h2>Note { props.data }</h2>
      </div>
      <div className="note-footer">
        <h3>Created_at</h3>
        <div className="buttons">
            <button className='delete' onClick={()=> props.deleteNote(props.id)}>Delete</button>
            <button className='update' onClick={()=> props.deleteNote(props.id)}>Update</button>
        </div>     
      </div>
    </div>
  )
};

export default Note;
