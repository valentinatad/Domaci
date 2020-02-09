let x = '';
let n = 5;
for (let i = 0; i <= 5; i++)
{x+= ' '.repeat(n-i) + '*'.repeat(i) + ' '+ '*'.repeat(i)+ '\n';}
console.log(x);
