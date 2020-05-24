import React from "react";


export default function Pagination(props) {
  return (
    <div className="pages">
      <button onClick={(e) => props.context.changeOffset(e, "prev")}>
        Prev
      </button>
      <button onClick={(e) => props.context.changeOffset(e, "next")}>
        next
      </button>
    </div>
  );
}
