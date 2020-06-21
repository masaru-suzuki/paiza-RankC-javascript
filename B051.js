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
  let masic_circle = [];
  
  // 汚れて見えなくなった数字のインデックスを[行,列]の配列で挿入する
  let invisible_LR = [];
  
  
  // 魔法陣配列を作成（行毎の配列を masic_circle　に挿入していく)
  for(let h = 0; h < N; h++) {
      const line_of_masic_circle = lines[h+1].split(' ');
      //数値に変換
      let converted_line = [];
      for(let i = 0; i < N; i++) {
          const target = Number(line_of_masic_circle[i]);
          converted_line.push(target);
          
          //汚れて見えなかった箇所のindexを取得
          if(target === 0) {
              invisible_LR.push([h,i]);
          }
          }
          
      masic_circle.push(converted_line);
  }
//   console.log(invisible_LR);
//   console.log(masic_circle)
  
  
  
  // 汚れて見えなくなった数値を特定する
  
 // 1~N^2までの配列を生成
  let numbers = Array(Math.pow(N,2)).fill(1).map((v, i) => i + 1);
//   console.log(numbers);
  
  // 汚れて見えなくなった数値をinvisible_numbers　に挿入する
  let invisible_numbers = [];
  
  // 魔法陣配列を１つの配列にする
  let test_arr = masic_circle.join();
  
  // 魔法陣の中にすでにある数値を消していく
  for(let j = 0; j < numbers.length; j++) {
    if(!test_arr.includes(numbers[j])){
        invisible_numbers.push(numbers[j]);
    }
  }
// console.log(invisible_numbers)


  // 魔法陣を完成させる
  // invisible_numbers[0] が masic_circle[invisible_LR[0][0]][invisible_LR[0][1]]の時
  masic_circle[invisible_LR[0][0]][invisible_LR[0][1]] = invisible_numbers[0];
  masic_circle[invisible_LR[1][0]][invisible_LR[1][1]] = invisible_numbers[1];
//   console.log(masic_circle)

  //配列の合計を求めるfunction
  const reducer = (sum,currentValue) => sum + currentValue;

  // 横方向の判定 => 同じ行の２箇所が見えていない場合は判定できない。
  // 見えない箇所の行 invisible_LR[0][0] invisible_LR[1][0]合計をそれぞれ求める
      let sum1 = masic_circle[invisible_LR[0][0]].reduce(reducer,0);
      let sum2 = masic_circle[invisible_LR[1][0]].reduce(reducer,0);
// console.log(sum1)
// console.log(sum2)
  //縦方向の判定 => 同じ列の２箇所が見えていない場合は判定できない
  // 見えない箇所の列　invisible_LR[0][1], invisible_LR[1][1] の合計をそれぞれ求める
  let sum3 = 0;
  let sum4 = 0;
  for(let i = 0; i < N; i++) {
      sum3 += masic_circle[i][invisible_LR[0][1]];
      sum4 += masic_circle[i][invisible_LR[1][1]];
  }
//   console.log(sum3)
//   console.log(sum4)

  //斜めの判定
  let sum5 = 0;
  let sum6 = 0;
  for(let i = 0; i < N; i++) {
      sum5 += masic_circle[i][i];
      sum6 += masic_circle[i][N - i - 1];
  }
//   console.log(sum5)
//   console.log(sum6)
  
  const check_arr = Array.from(new Set([sum1, sum2, sum3, sum4, sum5, sum6]));
  //たてと横と斜めの合計をもとに魔法陣の正誤を判定して出力
if(check_arr.length === 1){
    masic_circle.forEach(arr => {
        console.log(arr.join(' '));
    });
} else {
  masic_circle[invisible_LR[0][0]][invisible_LR[0][1]] = invisible_numbers[1];
  masic_circle[invisible_LR[1][0]][invisible_LR[1][1]] = invisible_numbers[0];
  masic_circle.forEach(arr => {
    console.log(arr.join(' '));
  });
}
  
});