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
  const N = lines[0];
  let score = 0;

  
//   N回判定を繰り返す
  for(let i = 0; i < N; i++) {
    //   文字列を配列化する
      const question = lines[i+1].split(' ')[0].split('');
      const answer = lines[i+1].split(' ')[1].split('');
     //   文字列の正誤判定スコア
      let incorrect = 0;
      
    //   questionとanswerの判定を行う。
      if(question.length === answer.length){
        for(let j = 0; j < question.length; j++) {
            // 配列の正誤を判定
            if(question[j] !== answer[j]){
                incorrect += 1;
            }
        }
    // 正誤判定のスコアを元に結果を計算
        switch(incorrect){
            case 0:
                score += 2;
                break;
            case 1:
                score += 1;
                break;
            default:
                score += 0;
                break;
        }
          
      }
  
  }
  console.log(score);
  
});