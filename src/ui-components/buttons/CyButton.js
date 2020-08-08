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
  value,
  required,
  disabled
}) {
  return (
    <div className="form-group cy-form-group">
      <label>{inputLabel}</label>
      <div class="cy-input-group">
        <span className={"cy-input-prefix"}>{inputPrefix}</span>
        <input
          type={type}
          class="form-control cy-input"
          id={id}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
          required={required}
          disabled={disabled}
        />
        <span className={"cy-input-suffix"}>{inputSuffix}</span>
      </div>
    </div>
  );
}

export default CyInput;
