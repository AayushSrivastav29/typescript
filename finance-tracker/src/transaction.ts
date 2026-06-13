//business logic

import { randomUUID } from 'crypto';
import { Transaction, Summary, TransactionType } from './types';

//function to generate id
let totalIncome: number = 0;
let totalExpense: number = 0;
let transactionCount: number = 0;
let transactionArr: Transaction[] = [];

export function generateId(): string {
  return randomUUID();
}

//add Income or expense transaction
export function generateTransaction(
  transactionType: TransactionType,
  amount: number,
  description: string,
): Transaction {
  transactionCount++;
  transactionType === 'Income'
    ? (totalIncome += amount)
    : (totalExpense += amount);

  //create transaction object
  const obj : Transaction= {
    id: generateId(),
    type: transactionType,
    amount: amount,
    description: description,
    createdAt: new Date(),
  }
  //push to global array
  transactionArr.push(obj);

  return obj;
}

//generate summary of all transactions
export function generateSummary(): Summary {
  return {
    totalIncome: totalIncome,
    totalExpense: totalExpense,
    totalBalance: totalIncome - totalExpense,
    transactionCount: transactionCount,
  };
}

//function to view all transactions
export function getAllTransactions(): Transaction[] {
  return transactionArr;
}