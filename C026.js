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
  const carrot = Number(input[0]);
  const sewwtness = Number(input[1]);
  const tolerance = Number(input[2]);
  const tolerancedCarrot = [];
  
  // 許容範囲に入っているか判定する関数
  const judgmentFunc = (m, s, num) => {
      if(sewwtness-tolerance <= s && s <= sewwtness + tolerance){
          tolerancedCarrot.push([num, m]);
      }
  };
  
  // 人参の判定
  for(let i = 0; i < carrot; i++) {
      const m = Number(lines[i+1].split(' ')[0]);
      const s = Number(lines[i+1].split(' ')[1]);
      const num = i + 1;
      judgmentFunc(m, s, num);
  }
  
  
  // 許容範囲の人参がなければ'not found' あれば最大質量の人参の番号を出力する
  if(tolerancedCarrot.length === 0) {
      console.log('not found');
  } else {
      
  // 質量が最大となる人参の質量を検索
   const max = array => {
       const a = [];
       array.forEach(item => {
           a.push(item[1]);
       });
       return a.reduce((x,y) => Math.max(x,y));
   };
//   console.log(max(tolerancedCarrot))


//   質量最大の人参の番号を出力
for(let j = 0; j < tolerancedCarrot.length; j++) {
  if(tolerancedCarrot[j][1] === max(tolerancedCarrot)){
    console.log(tolerancedCarrot[j][0]);
    break;
  }
}
// //   質量最大の人参の番号を出力 [sortパターン]
// tolerancedCarrot.sort(function(a, b) {return a[1] - b[1];});
// const max = tolerancedCarrot[tolerancedCarrot.length -1][1];
// for(let j = 0; j < tolerancedCarrot.length; j++) {
//     if(tolerancedCarrot[j][1] === max){
//         console.log(tolerancedCarrot[j][0]);
//         break;
//     }
// }



  }

  
});