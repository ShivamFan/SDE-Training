import React from "react";
import { FilterOption } from "./FilterOption";

function PageTitle({ children }) {
  return (
    <>
      <div>
        <p className="PageTitle">{children}</p>
      </div>

      <FilterOption id="status">
        <option value="all">All</option>
        <option value="Incomplete">Incomplete</option>
        <option value="Completed">Completed</option>
      </FilterOption>
      <br />
    </>
  );
}

export default PageTitle;
