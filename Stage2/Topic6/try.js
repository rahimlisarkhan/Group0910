try {
  const a = 10;

  a = 15;
  console.log(a);
} catch (err) {
  console.log("err", err);
} finally {
  console.log("Test ");
}

const n = 11;

console.log(n);
