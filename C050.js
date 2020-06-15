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
  let price = Number(input[0]);
  const a_budget = Number(input[1]);
  const b_budget = Number(input[2]);
  
  //next_price で次のオークション価格を仮置きする => これにより、1こ前の価格に戻ることができる
  let next_price = 0;
  
  while(true) {
      next_price = price + 10;
      if(next_price > a_budget) {
          console.log('B ' + price);
          break;
      }
      price = next_price;
      
      next_price = price + 1000;
      if(next_price > b_budget) {
          console.log('A ' + price);
          break;
      }
      price = next_price;
      
  }
});