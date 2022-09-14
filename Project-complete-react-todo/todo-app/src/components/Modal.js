import { id } from "date-fns/locale";
import React, { useState, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch } from "react-redux";
// import { updateTodo } from "../slices/todoSlice";
// import { v4 as uuid } from "uuid";
// import ADD_TODO from '../sagas/handlers'

function Modal({ type, modalOpen, setmodalOpen, todo }) {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [is_complete, setis_complete] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (type === "update" && todo) {
      setTitle(todo.title);
      setdescription(todo.description);
      setis_complete(todo.is_complete);
    } else {
      setTitle("");
      setdescription("");
      setis_complete(false);
    }
  }, [type, todo, modalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title, description);

    if (title === "") {
      alert("Title cannot be empty");
      return;
    }
    if (description === "") {
      alert("description cannot be empty");
      return;
    }

    if (title && description) {
      if (type === "add") {
        // console.log("ADD");
        dispatch({
          type:"ADD_TODO",
          payload:{
            title: title,
            description: description,
            is_complete: is_complete,
          }
        }
          // addTodo({
          //   id: uuid(),
          //   title: title,
          //   description: description,
          //   status: status,
          //   time: new Date().toLocaleString(),
          // })

        );


      }
      if (type === "update") {
        if (todo.title !== title || todo.description !== description) {
          // console.log(todo , "TODODODOD");
          dispatch({
            type:"EDIT_TODO",
            payload:{
              id: todo.id,
              title: title,
              description: description,
              is_complete: is_complete,
            }
          });
         
          // dispatch(
          //   updateTodo({
          //     ...todo,
          //     title,
          //     description,
          //     status,
          //   })
          // );
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
              description
              <input
                type="textarea"
                id="description"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
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
