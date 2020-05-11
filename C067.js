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

  const t = Number(lines[0].split(' ')[0]);
  const n = Number(lines[0].split(' ')[1]);
// ２進法を配列にして、任意の行を取り出せるようにする。
  const toBinary = n.toString(2).split('').reverse();

  for(let i = 0; i < t; i++) {
      const target = lines[i+1];
      console.log(toBinary[target-1]);
  }

});