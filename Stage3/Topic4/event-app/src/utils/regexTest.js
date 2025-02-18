// const text = `<html>
//   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//   Nulla lorem justo, auctor vel lorem eget, aliquet scelerisque lorem.
//   Proin eu lorem euismod, luctus lorem sed, faucibus lorem.
// </html>`;

// // Regular expression to match "lorem" case-insensitively
// const regex = /lorem/gi;

// // Use matchAll() to find all occurrences

// const t = text.matchAll(regex);

// const matches = [...t];

// console.log('matches', matches);

// console.log('Matches found:', matches.length);
// matches.forEach((match, index) => {
//   console.log(`Match ${index + 1}: "${match[0]}" at index ${match.index}`);
// });

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const list = [
  'test2@gmail.com',
  '44@gmail.com',
  '',
  null,
  'sas@',
  'asef@mail.ru',
];

const newList = list.filter((item) => emailRegex.test(item));

console.log(newList);
