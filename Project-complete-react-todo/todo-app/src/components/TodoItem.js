import React, { useState } from "react";
import { format } from "date-fns/esm";
import { MdDelete, MdEdit } from "react-icons/md";
import { IoMdCheckmarkCircle } from "react-icons/io";
// import { deleteTodo, markComplete } from "../slices/todoSlice";

import { useDispatch } from "react-redux";
import Modal from "./Modal";

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  // const [disabled, setDisabled] = useState(false);

  const handleDelete = () => {
    // console.log("delete clicked");
    // dispatch(deleteTodo(todo.id));

    dispatch({
      type:"DELETE_TODO",
      payload:{
        id: todo.id,
        is_complete: todo.is_complete
      }
    });
  };

  const handleEdit = () => {
    // console.log("Edit Clicked");

    if (todo.is_complete) {
      // setDisabled(true);
      return;
    }
    setUpdateModalOpen(true);
  };
  const markDone = () => {
    // dispatch(markComplete(todo.id));
    dispatch({
      type:"TOGGLE_TODO",
      payload:{
        id: todo.id,
        is_complete: !todo.is_complete,
      }
    });
    // setDisabled(true);

  };

  // console.log(disabled);

  return (
    <>
      <div className="taskItem" style={{ backgroundColor: todo.is_complete ? "#e2eede" : "white" , border: todo.is_complete ? "3px solid #abcea1" : "3px solid #4c7fc2"  }}>
        <div className="taskDetails">
          <div className="texts">
            <p className="todoText">{todo.title}</p>
            <p>{todo.description}</p>
          </div>
        </div>
        <div className="actions">
          <div className="icons">
            <MdDelete
              onClick={handleDelete}
              onKeyDown={handleDelete}
              tabIndex={0}
              role="button"
            />
          </div>
          <div className="icons">
            <MdEdit
              onClick={handleEdit}
              disabled={todo.is_complete}
              onKeyDown={handleEdit}
              tabIndex={0}
              role="button"
            />
          </div>
          <div className="icons">
            <IoMdCheckmarkCircle
              onClick={() => {
                if(!todo.is_complete) {
                  markDone()
                }
              }}
              disabled={todo.is_complete}
              tabIndex={0}
              role="button"
            />
          </div>
        </div>
      </div>
      <Modal
        type={"update"}
        todo={todo}
        modalOpen={updateModalOpen}
        setmodalOpen={setUpdateModalOpen}
      />
    </>
  );
}

export default TodoItem;
