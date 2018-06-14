const account = {
  name: 'JBear',
  expenses: [],
  income: [],
  addExpense: (description, amount) => {
    account.expenses.push({
      description: description,
      amount: amount
    })
  },
  addIncome: (description, amount) => {
    account.income.push({
      description: description,
      amount: amount
    })
  },
  getAccountSummary: () => {
    let totalExpenses = 0;
    let totalIncome = 0;
    let accountBalance = 0;
    account.expenses.forEach((expense) => {
      totalExpenses = totalExpenses + expense.amount;
    });
    account.income.forEach((income) => {
      totalIncome = totalIncome + income.amount;
    })
    accountBalance = totalIncome - totalExpenses
    return `${account.name} has a balance of: $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses`;
  }
};

// Expense -> description: '', amount: #
// addExpense -> description, amount
// getAccountSummary -> total up all expense -> JBear has $# in expenses.

account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
account.addIncome('Job', 1000);
console.log(account.getAccountSummary());