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
  const winningNumber = lines[0].split(' ');
  const cards = Number(lines[1]);
  
  //一致している数を出力する
  // 当選番号の回数だけ一致しているか確認する
  for(let i = 0; i < cards; i++) {
    let wins = 0;
    let target = lines[i+2].split(' ');
    
    // 当選番号があったら、winsに+1する
      for(let j = 0; j < winningNumber.length; j++) {
          if(target.includes(winningNumber[j])) {
              wins += 1;
          }
      }
      console.log(wins);
    // for分の最後でwinsをリセットする
      wins = 0;
      
  }
  
});