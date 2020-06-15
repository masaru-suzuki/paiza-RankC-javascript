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
  const input = lines[0].split(' ');
  const box = Number(input[0]);
  const R = Number(input[1]) * 2;
  let number = 1;
  
  for(let i = 0; i < box; i++) {
      const h = Number(lines[i+1].split(' ')[0]);
      const w = Number(lines[i+1].split(' ')[1]);
      const d = Number(lines[i+1].split(' ')[2]);
      
      if(h >= R && w >= R && d >= R) {
          console.log(number);
      }
      number += 1;
  }
});