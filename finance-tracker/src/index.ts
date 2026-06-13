//entry point
/**
 * A command-line transaction logger that lets you:
 - Add income and expense transactions
 - View all transactions
 - See a running balance summary
 */

import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
import {
  generateTransaction,
  getAllTransactions,
  generateSummary,
} from './transaction';

async function main() {
  const rl = readline.createInterface({ input, output });

  console.log('Welcome to Finance Tracker Project!');

  try {
    while (true) {
      console.log('\nChoose a number to continue...');
      console.log('1. Add Income');
      console.log('2. Add Expense');
      console.log('3. View all Transactions');
      console.log('4. View Summary');
      console.log('5. Exit');

      const choice = await rl.question('\nYour choice: ');

      if (choice === '1') {
        console.log('\n--- Add Income ---');
        const amountStr = await rl.question('Enter income amount: ');
        const amount = parseFloat(amountStr);
        if (isNaN(amount) || amount <= 0) {
          console.log('Invalid amount. Must be a positive number.');
          continue;
        }
        const description = await rl.question('Enter description: ');
        const result = generateTransaction('Income', amount, description);
        console.log('Income recorded:', result);

      } else if (choice === '2') {
        console.log('\n--- Add Expense ---');
        const amountStr = await rl.question('Enter expense amount: ');
        const amount = parseFloat(amountStr);
        if (isNaN(amount) || amount <= 0) {
          console.log('Invalid amount. Must be a positive number.');
          continue;
        }
        const description = await rl.question('Enter description: ');
        const result = generateTransaction('Expense', amount, description);
        console.log('Expense recorded:', result);

      } else if (choice === '3') {
        console.log('\n--- All Transactions ---');
        const transactions = getAllTransactions();
        if (transactions.length === 0) {
          console.log('No transactions recorded yet.');
        } else {
          console.log(transactions);
        }

      } else if (choice === '4') {
        console.log('\n--- Summary ---');
        console.log(generateSummary());

      } else if (choice === '5') {
        console.log('Exiting Finance Tracker. Goodbye!');
        break;

      } else {
        console.log('Please enter a correct option (1-5).');
      }
    }
  } finally {
    rl.close();
  }
}

main().catch((err) => {
  console.error('An error occurred:', err);
});
