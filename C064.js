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


// 就活生とメニューの個数を特定
  const menu = Number(lines[0].split(' ')[0]);
  const member = Number(lines[0].split(' ')[1]);
  const caloriesOfMenu = [];


//   各食材のカロリーを配列にする
  for(let h = 0; h < menu; h++){
      caloriesOfMenu.push(Number(lines[h+1]));
  }

//   就活生ごとにカロリーを計算して出力する
  for(let i = 0; i < member; i++) {

      let totalCalorie = 0;
      let intake = [];

    //   品目ごとの摂取量を配列にする
      for(let j = 0; j < menu; j++) {
          intake.push(Number(lines[i+menu+1].split(' ')[j]));
      }

    // 品目とカロリー量を掛け合わせる
      for(let k = 0; k < menu; k++){
          totalCalorie += Math.floor(caloriesOfMenu[k] * intake[k] / 100);
      }

      console.log(totalCalorie);
  }


});