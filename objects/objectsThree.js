const myAccount = {
  name: 'JBear',
  expenses: 0,
  income: 0
};
// Referencing account.expenses. The parameter and one of the object
// Properties. I'm then setting that amount to account.expenses + amount
// Amount is again another parameter from the addExpense funciton 
const addExpense = (account, amount) => {
  account.expenses = account.expenses + amount;
};

const addIncome = (account, income) => {
  account.income = account.income + income;
}

const resetAccount = (account) => {
  account.expenses = 0;
  account.income = 0;
}

const getAccountSummary = (account) => {
  const balance = account.income - account.expenses
  return `Account for ${account.name} has ${balance} in their account. ${account.income} in income. ${account.expenses} in expenses`;
}

addIncome(myAccount, 2000);
addExpense(myAccount, 2.50);
addExpense(myAccount, 160);
console.log(getAccountSummary(myAccount));
