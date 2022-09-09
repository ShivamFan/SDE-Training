import React, { useState, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../slices/todoSlice";
import { v4 as uuid } from "uuid";

function Modal({ type, modalOpen, setmodalOpen, todo }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (type === "update" && todo) {
      setTitle(todo.title);
      setDesc(todo.desc);
    } else {
      setTitle("");
      setDesc("");
    }
  }, [type, todo, modalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title, desc);

    if (title === "") {
      alert("Title cannot be empty");
      return;
    }
    if (desc === "") {
      alert("Description cannot be empty");
      return;
    }

    if (title && desc) {
      if (type === "add") {
        // console.log("ADD");
        dispatch(
          addTodo({
            id: uuid(),
            title: title,
            desc: desc,
            time: new Date().toLocaleString(),
          })
        );
      }
      if (type === "update") {
        if (todo.title !== title || todo.desc !== desc) {
          // console.log("Update");
          dispatch(
            updateTodo({
              ...todo,
              title,
              desc,
            })
          );
        }
      }
      setmodalOpen(false);
    }
  };

  return (
    modalOpen && (
      <div className="modalWrap">
        <div className="modalContainer">
          <div
            className="closeButton"
            onClick={() => setmodalOpen(false)}
            onKeyDown={() => setmodalOpen(false)}
            tabIndex={0}
            role="button"
          >
            <MdOutlineClose />
          </div>
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <h1 className="formTitle">
              {" "}
              {type === "update" ? "Update" : "Add"} task{" "}
            </h1>
            <label htmlFor="title">
              Title
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              Description
              <input
                type="textarea"
                id="desc"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </label>

            <div className="buttonContainer">
              <button className="submitTaskbutton" type="submit">
                {type === "update" ? "Update" : "Submit"} task{" "}
              </button>
              <button
                className="cancelTaskbutton"
                type="button"
                onClick={() => setmodalOpen(false)}
                onKeyDown={() => setmodalOpen(false)}
              >
                cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default Modal;
