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
  let price = Number(lines[0].split(' ')[0]);
  const discountRate = Number(lines[0].split(' ')[1]);
  let totalCost = 0;
  
  do {
      totalCost = totalCost + price;
    //   console.log(totalCost)
      price = Math.floor(price - price * discountRate / 100);
    //   console.log(price)
  }while(price !== 0);
  
        console.log(totalCost);
});