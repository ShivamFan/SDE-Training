import React, { useState } from "react";
// import { format } from "date-fns/esm";
import { MdDelete, MdEdit } from "react-icons/md";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { deleteTodo, markComplete } from "../slices/todoSlice";

import { useDispatch } from "react-redux";
import Modal from "./Modal";

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleDelete = () => {
    // console.log("delete clicked");
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    // console.log("Edit Clicked");

    if (todo.status) {
      setDisabled(true);
      return;
    }
    setUpdateModalOpen(true);
  };
  const markDone = () => {
    dispatch(markComplete(todo.id));
    setDisabled(true);
  };

  return (
    <>
      <div className="taskItem">
        <div className="taskDetails">
          <div className="texts">
            <p className="todoText">{todo.title}</p>
            <p>{todo.desc}</p>
            {/* <p className="time">
              {" "}
              {format(new Date(todo.time), "p, MM/dd/yyyy")}
            </p> */}
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
              disabled={disabled}
              style={{ backgroundColor: todo.status ? "Red" : "" }}
              onKeyDown={handleEdit}
              tabIndex={0}
              role="button"
            />
          </div>
          <div className="icons">
            <IoMdCheckmarkCircle
              onClick={markDone}
              disabled={disabled}
              style={{ backgroundColor: todo.status ? "Red" : "" }}
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
