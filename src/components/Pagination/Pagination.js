import React from "react";


export default function Pagination(props) {
  return (
    <div className="pages">
      <button className="page-button" onClick={(e) => props.context.changeOffset(e, "prev")}>
        Previous
      </button>
      <button className="page-button" onClick={(e) => props.context.changeOffset(e, "next")}>
        Next
      </button>
    </div>
  );
}
