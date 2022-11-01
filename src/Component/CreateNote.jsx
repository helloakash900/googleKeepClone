import React, { useState } from 'react'

function CreateNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setNote((olddata)  => {
      return {
        ...olddata,
        [name]: value,
      };
    });
    // console.log(note)
    
  };
  const Add = () => {
    props.passNote(note)
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <div className="main-note">
        <input
          type="text"
          name='title'
          value={note.title}
          onChange={InputEvent}
          placeholder="Topic"
        />
        <textarea
          type="text"
          name='content'
          value={note.content}
          onChange={InputEvent}
          cols="30"
          rows="10"
          placeholder="write a note..."
        />
        <button onClick={Add} className="btn1">Add</button>
      </div>
    </div>
  );
}

export default CreateNote