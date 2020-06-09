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
  const member = lines[1].split(' ');
  const M = Number(lines[2]);
  const cost = [];
  
  // メンバーの金額を配列化する=>多次元配列
  for(let h = 0; h < N; h++) {
      cost.push([member[h], 0]);
  }
//   console.log(cost)
  
  
  for(let i = 0; i < M; i++) {
      const target = lines[i + 3].split(' ')[0];
      const targetIndex = member.indexOf(target);
      
  // 配列の金額を加算していく
      cost[targetIndex][1] += Number(lines[i + 3].split(' ')[1]);
  }
//   console.log(cost)
  
  // 金額順に並べ替える
  const compareFunc = (a,b) => {
      return b[1] - a[1];
  };
  cost.sort(compareFunc);
//   console.log(cost)


// 表示する
  cost.forEach(arr => {
      console.log(arr[0]);
  });
  
});