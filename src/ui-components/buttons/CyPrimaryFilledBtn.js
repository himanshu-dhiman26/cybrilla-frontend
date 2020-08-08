import React from "react";
import "../styles/custom.scss";

function CyPrimaryFilledBtn({ buttonLabel, id, disabled, btnCallback }) {
  return (
    <div className="form-group cy-form-group">
      <button className="btn primary-filled-button" id={id} disabled={disabled} onClick={btnCallback}>
        {buttonLabel}
      </button>
    </div>
  );
}

export default CyPrimaryFilledBtn;
