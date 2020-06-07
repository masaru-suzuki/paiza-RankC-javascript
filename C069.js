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
  const year = Number(lines[0].split(' ')[0]);
  const month = Number(lines[0].split(' ')[1]);
  const day = Number(lines[0].split(' ')[2]);
  const eventMonth = Number(lines[1].split(' ')[0]);
  const eventDay = Number(lines[1].split(' ')[1]);
  const ONE_YEAR = 181;
  
  // 4で割ると1余る数は4n+1で表せる
  // 1994年は4で割ると 498...2になる => 4n+2
  //1995年だったら？ => 4n+3だから、、、あと2年
  // よってあと 3年ごになる => 何日？ => 
  // 1年は奇数つき (7) * 13日　=> 91日
  // 偶数つき　(6) * 15日 => 90日
  // 1年は181日
  
  // 日付の差をどう表現するか？
  // 現在の日付をその年の最初から数えるとすると
  // 4月８にちは 13 + 15 + 13 +8日　=> 49日 = 28 * 2 -15 + 8 = 56 -7 = 49
  // 7月13日は 13 + 15 + 13 + 15 + 13 + 15 + 13日　=> 97日
  
  // 181日 * 3年 + (97日 - 49日) = 543 + 48 = 591日
  
  // これをプログラミングで表現する
  
  //まず、お祭りまでの年さを算出する
  let yearDifference = 0;
  switch(year % 4) {
      case 0:
          yearDifference = ONE_YEAR * 1;
          break;
      case 2:
          yearDifference = ONE_YEAR * 3;
          break;
      case 3:
          yearDifference = ONE_YEAR * 2;
          break;
      default:
          console.log('error');
          break;
  }
  
//   console.log(yearDifference);
  
  // 次に日付のさを算出する
  let dayDifference = 0;
  const startToDay = (month, day) => {
      if(month % 2) {
          return Math.floor(month / 2) * 28 + day;
      } else {
          return month / 2 * 28 - 15 + day;
      }
  };
//   console.log(startToDay(month, day));
//   console.log(startToDay(eventMonth, eventDay))
  
  console.log(yearDifference + startToDay(eventMonth, eventDay) - startToDay(month, day));
  
  
});