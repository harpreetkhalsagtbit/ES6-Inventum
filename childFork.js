const longComputation = () => {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  }
  return sum;
};
process.on("message", msg => {
  console.log("Message from parent:", msg);
  let sum = longComputation()
  process.send(sum);
});

