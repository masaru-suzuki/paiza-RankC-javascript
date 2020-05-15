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
    
  const day = Number(lines[0].split(' ')[0]);
  const purchaseStandardAmount = Number(lines[0].split(' ')[1]);
  const SaleStandardAmount = Number(lines[0].split(' ')[2]);
  let holding = 0;
  let portfolio = 0;
  
  for(let i = 0; i < day; i++) {
      let stockPrice = lines[i+1];
      
      if(stockPrice <= purchaseStandardAmount) {
          holding += 1;
          portfolio -= stockPrice;
      } else if(stockPrice >= SaleStandardAmount) {
          portfolio += stockPrice * holding;
          holding = 0;
      }
      
      if(i === day-1){
          portfolio += holding * stockPrice;
      }
  }
  
  console.log(portfolio);
  
});