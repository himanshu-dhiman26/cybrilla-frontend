import React from "react";
import "../styles/custom.scss";

function CyInput({
  inputLabel,
  type,
  id,
  placeholder,
  onFocus,
  onBlur,
  onChange,
  inputSuffix,
  inputPrefix,
}) {
  return (
    <div className="form-group cy-form-group">
      <label>{inputLabel}</label>
      <div className="cy-input-group">
        <span className={"cy-input-prefix"}>{inputPrefix}</span>
        <input
          type={type}
          className="form-control cy-input"
          id={id}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
        />
        <span className={"cy-input-suffix"}>{inputSuffix}</span>
      </div>
    </div>
  );
}

export default CyInput;
