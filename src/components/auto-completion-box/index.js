import React from "react";
import style from "./auto-completion-box.css";

class AutoCompletionBox extends React.Component {
  render() {
    return (
      <div className={style.box}>
        <h1>Auto-completion Test Box</h1>
        <textarea className={style.textArea} />
      </div>
    );
  }
}

export default AutoCompletionBox;
