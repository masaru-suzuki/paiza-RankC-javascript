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
    
  let month = Number(lines[0].split(' ')[0].split('/')[0]);
  let day = Number(lines[0].split(' ')[0].split('/')[1]);
  let hour = Number(lines[0].split(' ')[1].split(':')[0]);
  let minutes = Number(lines[0].split(' ')[1].split(':')[1]);
  
//   時間を繰り上げる
  if(24 <= hour){
    let carryDays = Math.floor(hour / 24);
    hour = hour % 24;
    day += carryDays;
  }
  
//   ２桁表記に変換
  const zeroPadding = target => {
      return ('0' + target).slice(-2);
  };
  month = zeroPadding(month);
  day = zeroPadding(day);
  hour = zeroPadding(hour);
  minutes = zeroPadding(minutes);
  
  console.log(month + '/' + day + ' ' + hour + ':' +  minutes);
  
});