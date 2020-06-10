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
  const N = Number(lines[0]);
  let point = 0;
  let totalPrice = Array(4).fill(0);
  for(let i = 0; i < N; i++) {
      const classification = Number(lines[i+1].split(' ')[0]);
      const price = Number(lines[i+1].split(' ')[1]);
    //   console.log(classification);
    //   console.log(price)
      totalPrice[classification] += price;
  }
  
  for(let j = 0; j < 4; j++) {
      totalPrice[j] = Math.floor(totalPrice[j] / 100) * 100;
  }
  point += (totalPrice[0] * 5 + totalPrice[1] * 3 + totalPrice[2] * 2 + totalPrice[3]) / 100;
  console.log(point);
});