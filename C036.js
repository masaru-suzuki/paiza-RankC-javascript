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
    // p1 vs p2 p3 vs p4 の構図
  const p1 = Number(lines[0].split(' ')[0]) - 1; // プログラムの性質上、-1しているから、最後に+1して元に戻して出力する
  const p2 = Number(lines[0].split(' ')[1]) - 1;
  const p3 = Number(lines[1].split(' ')[0]) - 1;
  const p4 = Number(lines[1].split(' ')[1]) - 1;
  const firstTime = lines[2].split(' ');
  const finalTime = lines[3].split(' ');
  
//   エントリーナンバーごとのタイムを配列にして、対戦相手同士で比較する
  
// 初戦の勝利者v1,v2を確定
    const decisionWinner = (time, a, b) => {
        if(Number(time[a]) < Number(time[b])) {
          return a;
      } else {
          return b;
      }
    };
  
  let v1 = decisionWinner(firstTime,p1, p2);
  let v2 = decisionWinner(firstTime, p3, p4);

//   決勝戦勝利者を確定
  const s1 = Math.min(v1,v2);
  const s2 = Math.max(v1,v2);
  
// 優勝者,準優勝者の出力
  if(Number(finalTime[0]) < Number(finalTime[1])) {
      console.log(s1 + 1);
      console.log(s2 + 1);
  } else {
      console.log(s2 + 1);
      console.log(s1 + 1);
  }
  
});