const INITIAL_STATE = {
  desiredIncome: 10000,
  homeExpenses: 10000,
  healthcareExpenses: 10000,
  medicalExpenses: 10000,
  otherExpenses: 10000,
  recoveryPeriod: 5,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_DESIRED_INCOME":
      return Object.assign({}, state, {
        desiredIncome: parseInt(action.value),
      });
    case "SET_HOME_EXPENSES":
      return Object.assign({}, state, {
        homeExpenses: parseInt(action.value),
      });
    case "SET_HEALTHCARE_EXPENSES":
      return Object.assign({}, state, {
        healthcareExpenses: parseInt(action.value),
      });
    case "SET_MEDICAL_EXPENSES":
      return Object.assign({}, state, {
        medicalExpenses: parseInt(action.value),
      });
    case "SET_OTHER_EXPENSES":
      return Object.assign({}, state, {
        otherExpenses: parseInt(action.value),
      });
    case "SET_RECOVERY_PERIOD":
      return Object.assign({}, state, {
        recoveryPeriod: parseInt(action.value),
      });

    default:
      return state;
  }
};

export default reducer;
