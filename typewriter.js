const sentence = "hello there from lighthouse labs";
let time = 0;
let count = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
    count--;
    if (!count) {
      process.stdout.write('\n');
    }
  }, time += 60);
  count++;
}
