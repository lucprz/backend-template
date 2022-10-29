console.log('====================================');
console.log('Welcome to the backend template!');
console.log('====================================');

import { sumTotal } from './common';

const sales: number[] = [10, 40, 30];

const total = sumTotal(sales);

const message = `Sales January ${total}`;

console.log(message);

for (let i = 0; i < 10; i++) {
  console.log(i);
}
