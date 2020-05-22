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
  const P_1 = Number(lines[0].split(' ')[0]);
  const P_2 = Number(lines[0].split(' ')[1]);
  const N = Number(lines[1]);
  
  for(let i = 0; i < N; i++) {
      const C_1 = Number(lines[i+2].split(' ')[0]);
      const C_2 = Number(lines[i+2].split(' ')[1]);
      
      if(C_1 > P_1) {
          console.log('Low');
      } else if(C_1 === P_1) {
          
          if (C_2 > P_2) {
              console.log('High');
          } else if(C_2 < P_2) {
              console.log('Low');
          }
          
      } else if (C_1 < P_1){
              console.log('High');
          }
  }
  
});