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
    
  // 対象の数値を取得
  const a = lines[0].split(' ')[0];
  const b = lines[0].split(' ')[1];
  // 最大桁数の取得
  const length = Math.max(...[a.length, b.length]);
  let result = [];
  
  // N桁に変更
  const zeroPadding = (NUM, LEN) => {
    return ( Array(LEN).join('0') + NUM ).slice( -LEN );
  };
  // 各桁を足した値の取得
  const conversionArray = (NUM1, NUM2, LEN) => {

    // 各桁の出力
    let targetArr1 = [];
    let targetArr2 = [];
    for (let i = 0 ; i < LEN; i++) {
        targetArr1.push(zeroPadding(NUM1, LEN).slice(i,i+1));
        targetArr2.push(zeroPadding(NUM2, LEN).slice(i,i+1));
    }
    // 各桁の和の算出
    for (let j = 0; j < LEN; j++) {
      const n = (Number(targetArr1[j]) + Number(targetArr2[j]));
      result.push(n.toString(10).slice(-1));
    }
  };

  conversionArray(Number(a), Number(b), length);

  // 各桁の和の配列を結合して出力
  console.log(result.join(''));

});