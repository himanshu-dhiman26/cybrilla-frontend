import React from "react";
import CyInput from "../../../ui-components/input/CyInput";

function ExpensesForm() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <CyInput
              inputLabel="Desired replacement income (after-tax)"
              type="text"
              inputSuffix="/month"
              inputPrefix="$"
            ></CyInput>
          </div>
          <div className="col-sm-12">
            <CyInput
              inputLabel="Desired replacement income (after-tax)"
              type="text"
              inputSuffix="/month"
              inputPrefix="$"
            ></CyInput>
          </div>
          <div className="col-sm-12">
            <CyInput
              inputLabel="Desired replacement income (after-tax)"
              type="text"
              inputSuffix="/month"
              inputPrefix="$"
            ></CyInput>
          </div>
          <div className="col-sm-12">
            <CyInput
              inputLabel="Desired replacement income (after-tax)"
              type="text"
              inputSuffix="/month"
              inputPrefix="$"
            ></CyInput>
          </div>
          <div className="col-sm-12">
            <CyInput
              inputLabel="Desired replacement income (after-tax)"
              type="text"
              inputSuffix="/month"
              inputPrefix="$"
            ></CyInput>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpensesForm;