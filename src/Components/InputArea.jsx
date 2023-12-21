import React, { useState } from "react";

function InputArea(props) {
  const [text, setText] = useState({
    title: "",
    note: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setText((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  return (
    <div className="inputArea">
      <input
        type="text"
        name="title"
        value={text.title}
        onChange={handleChange}
        placeholder="Title"
        autoComplete="on"
      />
      <input
        type="text"
        name="note"
        value={text.note}
        onChange={handleChange}
        placeholder="Take a note..."
        autoComplete="on"
      />
      <button
        onClick={() => {
          props.onadd(text);
          setText({
            title: "",
            note: "",
          });
        }}
      >
        Add
      </button>
    </div>
  );
}

export default InputArea;
