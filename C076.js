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
  const nomalTimeCost = Number(lines[0].split(' ')[0]);
  const nightTimeCost = Number(lines[0].split(' ')[1]);
  const midnightTimeCost = Number(lines[0].split(' ')[2]);
  const day = Number(lines[1]);
  let salary = 0;
  
  // 給与計算用の配列を作成
  const array_salary = new Array(23);
  array_salary.fill(midnightTimeCost, 0, 9);
  array_salary.fill(nomalTimeCost, 9, 17);
  array_salary.fill(nightTimeCost, 17, 22);
  array_salary.fill(midnightTimeCost, 22);
//   console.log(array_salary)
  
  for(let i = 0; i < day; i++) {
      // 出勤時間と退勤時間を算出
      const start = Number(lines[i+2].split(' ')[0]);
      const end = Number(lines[i+2].split(' ')[1]);
    //   console.log(end);
      // 出勤時間から退勤時間までを1、それ以外を０とする
      const workTime = new Array(23);
      workTime.fill(0,0,start);
      workTime.fill(1, start, end);
      workTime.fill(0, end);
    //   console.log(workTime);
      
      // 配列のインデックス番号を使って計算する
      // インデックス番号に基づく給与計算
      // 給与の0番目を0時と考える
      for(let j = 0; j < 23; j++) {
          salary += array_salary[j] * workTime[j];
      }
  }
  console.log(salary);
  
});