const INITIAL_STATE = {
  desiredIncome: 0,
  homeExpenses: 0,
  healthcareExpenses: 0,
  medicalExpenses: 0,
  otherExpenses: 0,
  recoveryPeriod: 0
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_DESIRED_INCOME":
      return Object.assign({}, state, {
        desiredIncome: action.value,
      });
    case "SET_HOME_EXPENSES":
      return Object.assign({}, state, {
        homeExpenses: action.value,
      });
    case "SET_HEALTHCARE_EXPENSES":
      return Object.assign({}, state, {
        healthcareExpenses: action.value,
      });
    case "SET_MEDICAL_EXPENSES":
      return Object.assign({}, state, {
        medicalExpenses: action.value,
      });
    case "SET_OTHER_EXPENSES":
      return Object.assign({}, state, {
        otherExpenses: action.value,
      });
    case "SET_RECOVERY_PERIOD":
      return Object.assign({}, state, {
        recoveryPeriod: action.value,
      });

    default:
      return state;
  }
};

export default reducer;
