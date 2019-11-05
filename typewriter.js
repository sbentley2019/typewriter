const delayLetters = function(str) {
  let time = 0;
  for (let i of str) {
    setTimeout(() => {
      process.stdout.write(i);
      if (i === str[str.length - 1]) {
        process.stdout.write('\n');
      }
    }, time * 50);
    time++;
  }
}

const sentence = "hello there from lighthouse labs";
delayLetters(sentence);
