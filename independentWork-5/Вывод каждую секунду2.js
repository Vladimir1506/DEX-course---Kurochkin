function printNumbers(from, to) {
  const timer = setInterval(() => {
    console.log(from++);
    if (from === to) {
      clearInterval(timer);
    };
  }, 1000);
}
printNumbers(1, 10);
