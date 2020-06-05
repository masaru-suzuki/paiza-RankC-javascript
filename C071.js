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
  const bottom_comparison_target = Number(lines[0].split(' ')[0]);
  const height_comparison_target = Number(lines[0].split(' ')[1]);
  let count = 0;
  
  
  // 条件を満たすか確認するfunction
  const checkTriangle = (a,b) => {
    let i = 1;
    
    while(a * i < bottom_comparison_target && b * i < height_comparison_target) {
      count += 1;
      i += 1;
    }
    
    // 逆パターン
    i = 1;
    while(b * i < bottom_comparison_target && a * i < height_comparison_target) {
      count += 1;
      i += 1;
    }
  };
  
  
  // 3:4:5パターン
  checkTriangle(3,4);
  // 5:12:13パターン
  checkTriangle(5,12);
  // 7:24:25パターン
  checkTriangle(7,24);
  // 8:15:17パターン
  checkTriangle(8,15);
  // 20:21:29パターン
  checkTriangle(20,21);

  console.log(count);
  
});