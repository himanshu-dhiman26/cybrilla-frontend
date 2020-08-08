import React from "react";
import "../styles/custom.scss";

function CyInput({
  inputLabel,
  labelIcon,
  type,
  id,
  min,
  placeholder,
  onFocus,
  onBlur,
  onChange,
  inputSuffix,
  inputPrefix,
  maxLength,
  value,
}) {
  
  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <div className="form-group cy-form-group">
      {inputLabel && (
        <div className="cy-label-group">
          <label className="col-form-label">{inputLabel}</label>
          <span className="cy-label-icon">{labelIcon}</span>
        </div>
      )}
      <div className="cy-input-group">
        {inputPrefix && (
          <span className={"cy-input-prefix"}>{inputPrefix}</span>
        )}
        <input
          type={type}
          className="form-control cy-input"
          id={id}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={(e) => handleChange(e)}
          min={min}
          value={value}
          maxLength={maxLength}
        />
        {inputSuffix && (
          <span className={"cy-input-suffix"}>{inputSuffix}</span>
        )}
      </div>
    </div>
  );
}

export default CyInput;
