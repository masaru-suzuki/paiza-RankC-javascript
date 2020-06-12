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
  // 花が咲くスケジュールを配列にして花が咲いたら+1
  // どの種も等しく咲いた日の1日後に枯れるから、枯れる日は考慮しなくて良い
  // スケジュール期間は最大90日
  let bloomedSchedule = Array(90).fill(0); // [0]が1日目
  
  for(let i = 0; i < N; i++) {
      const timeForBloom = Number(lines[i+1].split(' ')[0]);
      const dayOfSowingSeed = Number(lines[i+1].split(' ')[1]) -1;
      bloomedSchedule[timeForBloom + dayOfSowingSeed] += 1;
  }
//   console.log(bloomedSchedule)
  console.log(bloomedSchedule.indexOf(Math.max.apply(null,bloomedSchedule)) + 1);
  
});