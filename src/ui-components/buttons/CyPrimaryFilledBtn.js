import React from "react";
import "../styles/custom.scss";

function CyPrimaryFilledBtn({ buttonLabel, id, onFocus, onBlur, onHover, disabled }) {
  return (
    <div className="form-group cy-form-group">
      <button class="btn primary-filled-button" id={id} onHover={onHover} disabled={disabled}>
        {buttonLabel}
      </button>
    </div>
  );
}

export default CyPrimaryFilledBtn;
