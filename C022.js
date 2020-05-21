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
  const day = Number(lines[0]);
//   [day]日の中で、それぞれ、始値、終値、高値、安値それぞれの配列を作る
  let startPrice = [];
  let endPrice = [];
  let heighPrice = [];
  let lowPrice = [];
  let result = [];
  
  for(let i = 0; i < day; i++) {
      const s = Number(lines[i+1].split(' ')[0]);
      const e= Number(lines[i+1].split(' ')[1]);
      const h = Number(lines[i+1].split(' ')[2]);
      const l = Number(lines[i+1].split(' ')[3]);
      
      startPrice.push(s);
      endPrice.push(e);
      heighPrice.push(h);
      lowPrice.push(l);
  }
  

// それぞれの配列中から条件に合ったものを抽出して配列にする
  result.push(startPrice[0]);
  result.push(endPrice[day-1]);
  result.push(heighPrice.reduce((a,b)=>Math.max(a,b)));
  result.push(lowPrice.reduce((a,b)=>Math.min(a,b)));

// 配列の中身を結合して出力する

console.log(result.join(' '));
    
  
});