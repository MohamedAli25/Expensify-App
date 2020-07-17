import { ExpensesSummary } from "../../components/ExpensesSummary";
import React from "react";
import { shallow } from "enzyme";

test("should render ExpensesSummary correctly with 2 expenses", () => {
  const wrapper = shallow(
    <ExpensesSummary expensesCount={2} expensesTotal={94.34} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpensesSummary correctly with 1 expense", () => {
  const wrapper = shallow(
    <ExpensesSummary expensesCount={1} expensesTotal={94.34} />
  );
  expect(wrapper).toMatchSnapshot();
});
