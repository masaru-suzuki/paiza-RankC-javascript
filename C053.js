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
  let cards = (lines[1].split(' '));
  cards.sort();
  
  // 配列の最大値を0に変える
  const maxToZero = array => {
    let max = array.indexOf(Math.max(...array));
    array[max] = 0;
  };
  
  // 配列内の数値化
  const newCard = array => {
      let newArray = [];
      array.forEach(num => {
          newArray.push(Number(num));
      });
      
    return newArray;
  };

  // 配列の合計を計算
  const sum = array => {
      let sum = 0;
      array.forEach(function(elm) {
        sum += elm;
    });
    return sum;
  };
  
  if(cards[0] === '0' && cards[N -1] !== 'x10') {
      // 0カードのみのパターン
      cards.shift();
      cards.pop();
      cards = newCard(cards);
      console.log(sum(cards));
  } else if(cards[0] !== '0' && cards[N -1] === 'x10') {
    　// x10カードのみのパターン
      cards.pop();
      cards = newCard(cards);
      console.log(sum(cards) * 10);
  } else if(cards[0] === '0' && cards[N -1] === 'x10') {
      // 0カードとx10カードのパターン
      cards.shift();
      cards.pop();
      cards = newCard(cards);
      maxToZero(cards);
      console.log(sum(cards) * 10);
  } else {
      // 普通カードのみのパターン
      cards = newCard(cards);
      console.log(sum(cards));
  }
  
  

  
});