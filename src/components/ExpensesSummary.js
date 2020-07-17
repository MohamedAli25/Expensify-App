import React from "react";
import numeral from "numeral";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";
import expensesTotal from "../selectors/expenses-total";

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => (
  <div>
    <h1>
      Viewing{" "}
      {expensesCount + " " + (expensesCount === 1 ? "expense" : "expenses")}{" "}
      totalling {numeral(expensesTotal / 100).format("$0,0.00")}
    </h1>
  </div>
);

const mapStateToProps = (state) => {
  const selectedExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expensesCount: selectedExpenses.length,
    expensesTotal: expensesTotal(selectedExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
