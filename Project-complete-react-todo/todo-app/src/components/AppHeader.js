import React, { useState } from "react";
import { AiFillPlusSquare } from "react-icons/ai";
import Modal from "./Modal";

function AppHeader() {
  const [modalOpen, setmodalOpen] = useState(false);
  return (
    <div className="addNew">
      <span>Add New Task Here</span>
      <AiFillPlusSquare
        className="fa-plus"
        onClick={() => setmodalOpen(true)}
      />
      <Modal type={"add"} modalOpen={modalOpen} setmodalOpen={setmodalOpen} />
    </div>
  );
}

export default AppHeader;
