const delayLetters = function(str) {
  let time = 300;
  str += '\n'
  for(const char of str) {
    setTimeout(() => process.stdout.write(char), time);
    time += 75;
  }
}

const sentence = "hello there from lighthouse labs";
delayLetters(sentence);
