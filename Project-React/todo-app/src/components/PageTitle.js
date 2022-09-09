import React from "react";
// import { FilterOption } from "./FilterOption";

function PageTitle({ children }) {
  return (
    <>
      <div>
        <p className="PageTitle">{children}</p>
      </div>
      <br />
    </>
  );
}

export default PageTitle;
