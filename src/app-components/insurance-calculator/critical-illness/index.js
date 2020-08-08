import React from "react";
import ExpensesForm from "./expensesForm";
import IllnessChart from "./barGraph";
import RecoveryPeriodCard from "./recoveryPeriodCard";
import CyPrimaryFilledBtn from "../../../ui-components/buttons/CyPrimaryFilledBtn";

function CritialInsuranceCalculator() {
  return (
    <div>
      <div className="input">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 title-wrapper">
              <h1 className="page-title">
                Critical Illness Insurance Calculator
              </h1>
              <h5 className="page-subtitle">
                Adjust the sliders to estimate the coverage amount you may need
              </h5>
            </div>
            <div className="col-sm-12 col-md-4">
              <ExpensesForm></ExpensesForm>
            </div>
            <div className="col-sm-12 col-md-8">
              <div className="row">
                <div className="col-sm-12 recovery-card-wrapper">
                  <RecoveryPeriodCard></RecoveryPeriodCard>
                </div>
                <div className="col-sm-12 illness-graph-wrapper">
                  <IllnessChart></IllnessChart>
                </div>
                <div className="col-sm-12 insurance-suggestion">
                  <div className="assumption-title">Assumptions </div>
                  <div className="assumption-text-wrapper">
                    <h4 className="assumption-text">
                      A serious illness with recovery lasting{" "}
                      <span className="highlighted-text">12 months</span> could
                      put your finances down by{" "}
                      <span className="highlighted-text">$359,000</span>{" "}
                      <span className="underlined-text">today</span> and by{" "}
                      <span className="highlighted-text">$467,000</span> in{" "}
                      <span className="underlined-text">10 years.</span>
                    </h4>
                  </div>
                  <div className="assumption-btn">
                    <CyPrimaryFilledBtn buttonLabel="START COMPARING QUOTES"></CyPrimaryFilledBtn>
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

export default CritialInsuranceCalculator;
