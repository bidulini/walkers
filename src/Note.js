import React from "react";

export default function Note() {
  return (
    <div>
      <div className="note-container">
        <div className="shopping-list-title">NOTE:</div>
      </div>
      <div className="button-container">
        <button className="bottom-buttons">Reset</button>
        <button className="bottom-buttons">Save</button>
      </div>
    </div>
  );
}
