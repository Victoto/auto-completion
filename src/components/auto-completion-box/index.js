import React from "react";
import style from "./auto-completion-box.css";

class AutoCompletionBox extends React.Component {
  render() {
    const textBoxOption = (
      <div>
        <textarea className={style.textArea} />
      </div>
    );

    const seperateBoxOption = (
      <div className={style.seperateBoxOption}>
        <div className={style.boxRow}>
          <label>SELECT</label>
          <input className={style.input} />
        </div>

        <div className={style.boxRow}>
          <label>WHERE</label>
          <input className={style.input} />
          <input className={style.input} />
          <input className={style.input} />
        </div>
      </div>
    );

    return (
      <div className={style.page}>
        <h1>Auto-completion Test Box</h1>
        {textBoxOption}
        {seperateBoxOption}
      </div>
    );
  }
}

export default AutoCompletionBox;
