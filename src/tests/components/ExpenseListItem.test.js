import ExpenseListItem from "../../components/ExpenseListItem";
import React from "react";
import { shallow } from "enzyme";

test("should render ExpenseListItem", () => {
  const data = {
    id: "1",
    description: "Rent",
    amount: 10000,
    createdAt: 0,
  };
  const wrapper = shallow(<ExpenseListItem {...data} />);
  expect(wrapper).toMatchSnapshot();
});
