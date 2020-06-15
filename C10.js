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
  const a = Number(input[0]);
  const b = Number(input[1]);
  const R = Number(input[2]);
  const tree = Number(lines[1]);
  
  for(let i = 0; i < tree; i++) {
      const x = Number(lines[i+2].split(' ')[0]);
      const y = Number(lines[i+2].split(' ')[1]);
      
      Math.pow(x-a,2) + Math.pow(y-b,2) >= Math.pow(R,2) ? console.log('silent') : console.log('noisy');
  }
});