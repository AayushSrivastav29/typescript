//application global types mentioned here

export type TransactionType = 'Income' | 'Expense';

export type Transaction = {
  readonly id: string; //uuid
  type: TransactionType;
  amount: number;
  description: string;
  readonly createdAt: Date; //readonly-once set, cant be changed
};

export type Summary = {
  totalIncome: number;
  totalExpense: number;
  totalBalance: number;
  transactionCount: number;
};
