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
  const input = lines[0].split(' ');
  const a = Number(input[0]);
  const b = Number(input[1]);
  const c = Number(input[2]);
  const train = Number(lines[1]);
  let time = [];
  
  
  
  // 与えられた時間を４桁の時間へ変換する ex) 8:5分 => [0805]
  const getdoubleDigestNumer = num => {
    return ('0' + num).slice(-2);
  };
  
  const convert_time = time => {
      const a = Math.floor(time / 60); // 時間の一桁表示
      const b = time % 60; // 分の表示
      // 二桁へ変換
      const h = getdoubleDigestNumer(a);
      const m = getdoubleDigestNumer(b);
      
      // 答えを出力
      console.log(h + ':' + m);

  };
  
  // 〇〇時の電車に乗れば間に合う時間を算出　=> 時間は分を単位として、 00:00　からカウントする
    //08:59 => 539
    const inTime = 8 *60 + 59 - b - c; // number
  
  
  for(let i = 0; i < train; i++) {
      const hour = Number(lines[i+2].split(' ')[0]);
      const minuits = Number(lines[i+2].split(' ')[1]);
      const time_train = 60 * hour + minuits;
      if(time_train <= inTime) time.push(time_train);
  }
  
//   console.log(time)
  
  
  // 出発すれば間に合う時間 = 最も遅い時刻[電車が来る時刻]  - a
  const departure_time = time[time.length - 1] - a;
//   console.log(departure_time)
  
  // 答えを出力
  convert_time(departure_time);
  
  
});