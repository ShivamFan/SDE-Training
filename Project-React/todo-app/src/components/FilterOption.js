import React from "react";

function FilterOption({ children }) {
  return <select className="filterTask">{children}</select>;
}

export { FilterOption };
