function printNumbers(from, to) {
  if (from < to) {
    setTimeout(() => {
      console.log(from++);
      printNumbers(from, to);
    }, 1000)
  }
}
printNumbers(1, 10);