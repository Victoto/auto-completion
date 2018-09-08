import React from "react";
import style from "./auto-completion-box.css";

class AutoCompletionBox extends React.Component {
  render() {
    const textBoxOption = (
      <div>
        <textarea className={style.textArea} />
      </div>
    );

    return (
      <div className={style.page}>
        <h1>Auto-completion Test Box</h1>
        {textBoxOption}
      </div>
    );
  }
}

export default AutoCompletionBox;
