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
  const total_bushes = Number(input[0]);
  const total_rabbits = Number(input[1]);
  const total_jump = Number(input[2]);
  let bushes_array = new Array(total_bushes);
  
  
  // 茂みの配列を作成 => ウサギがいるならウサギの番号[1~M+1]を いなければ、0を
  bushes_array.fill(0);
  
  // ウサギのいちを配列に入れ込む
  for(let i = 0; i < total_rabbits; i++) {
      const posision = Number(lines[i+1])-1;
      bushes_array[posision] = i+1;
  }
  
//   console.log(bushes_array + '::start')
  // ジャンプした後のウサギの配列を計算する
  for(let h = 0; h < total_jump; h++) {
      for(let i = 0; i < total_rabbits; i++) {
          //ウサギ[target]の今いる茂みのインデックス[posision]を求める
          const target = i+1;
          const posision = bushes_array.indexOf(target);
        //   console.log(posision + ':ウサギ' + target + 'のいるindex')
          
          // 今いるposisionよりも後ろに空いている茂み(0)があればそこに移動する,なければ今いるところよりも前の茂みを検索する
          let vacant_bush = bushes_array.indexOf(0, posision+1);
        //   console.log(vacant_bush + 'ウサギ' + target +'の現在位置よりも後ろの空いている茂み')
          
          if(vacant_bush >= 0) {
            //   console.log('今いる位置よりも後の茂みが空いているパターン')
              //空いている茂みにウサギを移動
              bushes_array[vacant_bush] = target;
              //ウサギのいるいちを０に
              bushes_array[posision] = 0;
          } else {
            //   console.log('今いる位置よりも後に空いている茂みがないパターン')
              //先頭から検索
              vacant_bush = bushes_array.indexOf(0);
              //空いている茂みにウサギを移動
              bushes_array[vacant_bush] = target;
              //ウサギのいるいちを０に
              bushes_array[posision] = 0;
          }
          
            //   console.log(bushes_array)
          
      }
      }
      
    // ウサギ１からいちを出力
    for(let i = 0; i < total_rabbits; i++) {
        const target = i+1;
        const posision = bushes_array.indexOf(target);
        console.log(posision + 1);
    }
});