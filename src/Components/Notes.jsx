import React from 'react'

function Notes(props) {
  return (
    <>
        <div className='notes'>
            <div className='note'>
                <h3>{props.title}</h3>
                <p>{props.note}</p>
            </div>
                <button id="delete" onClick={()=>{
                  props.ondelete(props.id);
                }}>Delete</button>
        </div>
    </>
  )
}

export default Notes;