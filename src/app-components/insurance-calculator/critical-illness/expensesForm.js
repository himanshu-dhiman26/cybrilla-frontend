import React, {useState} from "react";
import CyInput from "../../../ui-components/input/CyInput";
import {ReactComponent as InfoIcon} from "../../../assets/svg/info.svg";
import { useDispatch } from "react-redux";
import {
  setDesiredIncome,
  setHomeExpenses,
  setHealthcareExpenses,
  setMedicalExpenses,
  setOtherExpenses,
} from "../../../redux/actions/insurance-calculator/actions"

function ExpensesForm() {

  const dispatch = useDispatch();

  const [desiredIncome, setIncome] = useState("10000");
  const [healthcareExpenses, setHealthExpense] = useState("10000");
  const [homeExpenses, setHomeExpense] = useState("10000");
  const [medicalExpenses, setMedicalExpense] = useState("10000");
  const [otherExpenses, setOtherExpense] = useState("10000");


  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
    dispatch(setDesiredIncome(e.target.value));
  };

  const handleHealthcareExpenseChange = (e) => {
    setHealthExpense(e.target.value);
    dispatch(setHomeExpenses(e.target.value));
  };

  const handleHomeExpenseChange = (e) => {
    setHomeExpense(e.target.value);
    dispatch(setHealthcareExpenses(e.target.value));
  };

  const handleMedicalExpenseChange = (e) => {
    setMedicalExpense(e.target.value);
    dispatch(setMedicalExpenses(e.target.value));
  };

  const handleOtherExpenseChange = (e) => {
    setOtherExpense(e.target.value);
    dispatch(setOtherExpenses(e.target.value));
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <CyInput
              inputLabel="Desired replacement income (after-tax)"
              type="text"
              min="0"
              value={desiredIncome}
              labelIcon={<InfoIcon className="label-icon" />}
              maxLength="8"
              onChange={handleIncomeChange}
              inputSuffix="/month"
              inputPrefix="$"
            ></CyInput>
          </div>
          <div className="col-sm-12">
            <CyInput
              inputLabel="Out-of-pocket Healthcare Expenses"
              type="text"
              min="0"
              value={healthcareExpenses}
              onChange={handleHealthcareExpenseChange}
              labelIcon={<InfoIcon className="label-icon" />}
              maxLength="8"
              inputPrefix="$"
            ></CyInput>
          </div>
          <div className="col-sm-12">
            <CyInput
              inputLabel="Home Modification Expenses"
              type="text"
              min="0"
              value={homeExpenses}
              onChange={handleHomeExpenseChange}
              labelIcon={<InfoIcon className="label-icon" />}
              maxLength="8"
              inputPrefix="$"
            ></CyInput>
          </div>
          <div className="col-sm-12">
            <CyInput
              inputLabel="Medical Homecare Expenses"
              type="text"
              min="0"
              value={medicalExpenses}
              onChange={handleMedicalExpenseChange}
              labelIcon={<InfoIcon className="label-icon" />}
              maxLength="8"
              inputSuffix="/month"
              inputPrefix="$"
            ></CyInput>
          </div>
          <div className="col-sm-12">
            <CyInput
              inputLabel="Other Expenses (transport, childcare, etc)"
              type="text"
              min="0"
              value={otherExpenses}
              onChange={handleOtherExpenseChange}
              maxLength="8"
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