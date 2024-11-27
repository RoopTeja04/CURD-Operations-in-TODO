import React, { useEffect, useState } from 'react';
import "./App.css";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";

const App = () => {
  const [note, setNote] = useState({ name: "" });
  const [storeNote, setStoreNote] = useState([]);
  const [edit, setEdit] = useState(-1);

  useEffect(() => {
    const savedNote = JSON.parse(localStorage.getItem("TODO")) || [];
    setStoreNote(savedNote);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit === -1) {
      const updatedNote = [...storeNote, note.name];
      setStoreNote(updatedNote);
      localStorage.setItem("TODO", JSON.stringify(updatedNote));
    } else {
      const updatedNote = storeNote.map((naming, index) =>
        edit === index ? note.name : naming
      );
      setStoreNote(updatedNote);
      localStorage.setItem("TODO", JSON.stringify(updatedNote));
    }
    setNote({ name: "" });
    setEdit(-1);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setNote((note) => ({ ...note, name: value }));
  };

  const handleDelete = (name) => {
    const updatedName = storeNote.filter((named) => named !== name);
    setStoreNote(updatedName);
    localStorage.setItem("TODO", JSON.stringify(updatedName));
  };

  const handleUpdate = (index) => {
    setNote({ name: storeNote[index] });
    setEdit(index);
  };

  return (
    <>
      <div className="todo">
        <h1 className="todo-head">TODO List</h1>
        <form onSubmit={handleSubmit} className="todo-form">
          <label className="todo-label">Name</label>
          <input
            className="todo-input"
            type="text"
            value={note.name}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit">
            {edit === -1 ? (
              <MdOutlineBookmarkAdd className="submit-add" />
            ) : (
              <GrUpdate className="submit-update" />
            )}
          </button>
        </form>
      </div>
      <div className="todo-list">
        {storeNote.map((name, index) => (
          <div key={index} className="todo-list-name">
            <p className="todo-list-values">{name}</p>
            <div className="todo-list-buttons">
              <button
                onClick={() => handleUpdate(index)}
                className="todo-list-update"
              >
                <GrDocumentUpdate style={{ width: "40px"}}/>
              </button>
              <button
                onClick={() => handleDelete(name)}
                className="todo-list-delete"
              >
                <MdDelete style={{ width: "40px"}} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
