import React from "react";
import { Button } from "antd";

function Filter({ changeFilter }) {
  function getFilter(event) {
    event.preventDefault();
    const filter = event.target.getAttribute("filter");
    changeFilter(filter);
  }

  return (
    <div className="filter-block">
      <Button className="filter-block_button" onClick={getFilter} filter="ALL">
        All
      </Button>
      <Button
        className="filter-block_button"
        onClick={getFilter}
        filter="CCOMPLITED"
      >
        Complit
      </Button>
      <Button
        className="filter-block_button"
        onClick={getFilter}
        filter="INWORK"
      >
        In work
      </Button>
    </div>
  );
}

export default Filter;
