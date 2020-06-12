process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！

var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  const cipher = lines[0].split('+').join('').split('');
//   console.log(cipher)
  let result = 0;
  for(let i = 0; i < cipher.length; i++) {
      cipher[i].split('').includes('<') ? result += 10 : result += 1;
  }
    console.log(result);
});