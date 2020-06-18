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
  const height = Number(lines[0].split(' ')[0]);
  const width = Number(lines[0].split(' ')[1]);
  
  // 配列の中に、H行分の配列を作り、列を挿入していく
  // 行 height 列 width　分の配列を作成=>中身は仮に0としておく。
  
  
  const result = [];
  for(let i = 0; i <height; i++) {
    result.push([]);
  }

//   // 表の4箇所を埋める
  result[0][0] = Number(lines[1].split(' ')[0]);
  result[0][1] = Number(lines[1].split(' ')[1]);
  result[1][0] = Number(lines[2].split(' ')[0]);
  result[1][1] = Number(lines[2].split(' ')[1]);
  
//   console.log(result)
  
  for(let w = 0; w < width-2; w++) {
      result[0][w+2] = result[0][w+1] * 2 - result[0][w];
      result[1][w+2] = result[1][w+1] * 2 - result[1][w];
  }
  
  for(let h = 0; h < height-2; h++) {
      for(let j = 0; j < width; j++) {
          result[h+2][j] = result[h+1][j] * 2 - result[h][j];
      }
  }
  
  
  result.forEach(arr => {
      console.log(arr.join(' '));
  });
  
  
});