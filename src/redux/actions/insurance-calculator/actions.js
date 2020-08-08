/*
 * action types
 */

const SET_DESIRED_INCOME = "SET_DESIRED_INCOME";
const SET_HOME_EXPENSES = "SET_HOME_EXPENSES";
const SET_HEALTHCARE_EXPENSES = "SET_HEALTHCARE_EXPENSES";
const SET_MEDICAL_EXPENSES = "SET_MEDICAL_EXPENSES";
const SET_OTHER_EXPENSES = "SET_OTHER_EXPENSES";
const SET_RECOVERY_PERIOD = "SET_RECOVERY_PERIOD";

/*
 * action creators
 */
function setDesiredIncome(incomeValue) {
  return {
    type: SET_DESIRED_INCOME,
    value: incomeValue,
  };
}

function setHomeExpenses(expenseValue) {
  return {
    type: SET_HOME_EXPENSES,
    value: expenseValue,
  };
}

function setHealthcareExpenses(expenseValue) {
  return {
    type: SET_HEALTHCARE_EXPENSES,
    value: expenseValue,
  };
}

function setMedicalExpenses(expenseValue) {
  return {
    type: SET_MEDICAL_EXPENSES,
    value: expenseValue,
  };
}

function setRecoveryPeriod(periodValue) {
  return {
    type: SET_RECOVERY_PERIOD,
    value: periodValue,
  };
}

function setOtherExpenses(expenseValue) {
  return {
    type: SET_OTHER_EXPENSES,
    value: expenseValue,
  };
}

export {
  setDesiredIncome,
  setHomeExpenses,
  setHealthcareExpenses,
  setMedicalExpenses,
  setRecoveryPeriod,
  setOtherExpenses,
};
