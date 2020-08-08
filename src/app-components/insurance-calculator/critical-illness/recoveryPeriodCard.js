import React, { useState } from "react";
import CyInput from "../../../ui-components/input/CyInput";
import { ReactComponent as InfoIcon } from "../../../assets/svg/info.svg";
import { useDispatch } from "react-redux";
import {setRecoveryPeriod} from "../../../redux/actions/insurance-calculator/actions"

function ExpensesForm() {

  const [recoveryPeriod, setPeriod] = useState(5);

  const dispatch = useDispatch();

  const handlePeriodChange = (e) => {
    setPeriod(e.target.value);
    dispatch(setRecoveryPeriod(e.target.value))
  }

  return (
    <div>
      <div className="container">
        <div className="card recovery-period-card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-12">
                <div className="row recovery-input-wrapper">
                  <div className="col-md-6">
                    <label>Recovery period</label>
                    <span className="cy-label-icon">
                      <InfoIcon className="label-icon" />
                    </span>
                  </div>
                  <div className="col-md-6">
                    <CyInput
                      type="text"
                      min="0"
                      value={recoveryPeriod}
                      maxLength="2"
                      onChange={handlePeriodChange}
                      inputSuffix="months"
                      debounceInterval={3000}
                      enableDebounce={true}
                    ></CyInput>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpensesForm;
