import React from 'react'

function Note(props) {
  const delItem = () => {
    props.deleteItem(props.id);
  }
  return (
    <>
     
        <div className="note">
        <h1>{ props.title}</h1>
        <br />
        <p>{ props.content}</p>
        <button className="btn" onClick={delItem}>
          Delete
        </button>
      </div>
    </>
    
  
  )
}

export default Note