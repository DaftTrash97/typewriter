const sentence = "Hello, I love Miguel O' Hara";
let charDelay = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, charDelay);

  charDelay += 50;
}

setTimeout(() => {
  console.log('\n');
}, charDelay);