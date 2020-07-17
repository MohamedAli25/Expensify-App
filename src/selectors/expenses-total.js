export default (expenses) => {
  let result = 0;
  expenses.forEach((expense) => {
    result += expense.amount;
  });
  return result;
};
