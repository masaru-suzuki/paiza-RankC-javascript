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
  const M = Number(input[0]);
  const N = Number(input[1]);
  const K = Number(input[2]);
  
  // 有権者の指示をcount配列で管理する => count[0]は支持者なし。count[1]は1番目の支持者
  const count = [N];
  for(let h = 0; h < M; h++) {
      count.push(0);
  }
  
  
  for(let i = 0; i < K; i++) {
      const speaker = lines[i+1];
      let getSupport = 0;
      let supporter = 0;
      
      
      
      // 演説者の支持者を配列から取り出す => 後にgetSupportと合算して、配列に戻す
    //   console.log(count + ':ループ先頭の初期値');
    //   console.log(count[speaker] + ':ループ先頭の演説者の票数')
      
      // 演説者の支持者数を確認
      supporter = count[speaker];
      
      //演説者の支持者を取り出す
      count.splice(speaker,1);
    //   console.log(count + ':演説者以外の支持者')
      
      // 有権者がいる(0以上）立候補者や無支持者のから-1する
          for(let h = 0; h < M + 1; h++) {
              if(count[h] > 0) {
                  count[h] -= 1;
                  getSupport += 1;
              }
          }
        //   console.log(getSupport + ':演説で得た支持者')
      // 元々の支持者と集めた支持者を合算
      supporter += getSupport;
    //   console.log(supporter + ':支持者の合計')
      
      // 元々のcountの位置に集計結果を挿入
      count.splice(speaker, 0, supporter);
    //   console.log(count);
      
  }
    //   console.log(count + ':集計結果')
      
      // 集計のために無支持者を削除する
      count.shift();
    //   console.log(count)
      
      // 得票数が同じ立候補者がいるか確認
        // 配列内で値が重複してないか調べる => 重複ありならtrue
        function existsSameValue(a){
          var s = new Set(a);
          return s.size != a.length;
        }
        
        
        // 最大得票数
        const maxVotes = count.reduce((a,b)=>Math.max(a,b));
        // console.log(maxVotes)
        
        
        // 場合わけで選挙結果を出力する
        
        if(existsSameValue(count)){
            // console.log('重複あり')
            for(let j = 0; j < count.length; j++) {
                if(count[j] === maxVotes) {
                    console.log(j+1);
                }
            }
        }else{
            // console.log('重複なし')
            console.log(count.indexOf(maxVotes) + 1);
        }
      
});