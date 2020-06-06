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
  const xc = Number(lines[0].split(' ')[0]);
  const yc = Number(lines[0].split(' ')[1]);
  const r_1 = Number(lines[0].split(' ')[2]);
  const r_2 = Number(lines[0].split(' ')[3]);
  const N = Number(lines[1]);
  
  for(let i = 0; i < N; i++) {
      const x = Number(lines[i+2].split(' ')[0]);
      const y = Number(lines[i+2].split(' ')[1]);
      const judgment = Math.pow((x - xc), 2) + Math.pow((y - yc), 2);
    //   console.log(judgment)
      if(Math.pow(r_1,2) <= judgment && judgment <= Math.pow(r_2, 2)) {
          console.log('yes');
      } else {
          console.log('no');
      }
  }
});