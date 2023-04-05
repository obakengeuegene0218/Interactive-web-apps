const leoName = 'Leo';
const leoSurname = 'Musvaire     ';
const leoBalance = '-9394';
const sarahName = 'Sarah    ';
const sarahSurname = 'Kleinhans';
const sarahBalance = '-4582.21000111';
const divider = '----------------------------------';
// Only change below this line
const owed = parseFloat(leoBalance) + parseFloat(sarahBalance);
const leo = `${leoName} ${leoSurname} Owed: R${parseFloat(leoBalance).toFixed(2)}\n`;
const sarah = `${sarahName} ${sarahSurname} Owed: R${parseFloat(sarahBalance).toFixed(2)}\n`;
const total = `  Total amount owed: R${owed.toFixed(2)}`;
const result = `\n${leo}${sarah}\n${divider}\n${total.padStart(34)}\n${divider}`;
console.log(result);







