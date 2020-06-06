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
  const M = Number(lines[0].split(' ')[0]);
  const p = Number(lines[0].split(' ')[1]);
  const q = Number(lines[0].split(' ')[2]);
  
  const leftovers_1 = M * (100 - p) / 100;
  const leftovers_2 = leftovers_1 * (100 - q) / 100;
  console.log(leftovers_2);
  
});