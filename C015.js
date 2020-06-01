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
  
  for(let i = 0; i < N; i++) {
      const day = lines[i+1].split(' ')[0];
      const price = Number(lines[i+1].split(' ')[1]);
      
    
    if(day.split('').includes('3')) {
        // 数字を文字列にして、一文字づつ配列化=>３が含まれているか確認
        point += Math.floor(price * 0.01 * 3);
    } else if(day.split('').includes('5')) {
        // 数字を文字列にして、一文字づつ配列化=>5が含まれているか確認
        point += Math.floor(price * 0.01 * 5);
    } else {
        // 通常の日
        point += Math.floor(price * 0.01);
    }


  }
  console.log(point);
});