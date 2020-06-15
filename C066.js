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
  const goldfish = Number(input[0]);
  let remaining_scooping = Number(input[1]);
  const durable_value = Number(input[2]);
  let get_goldfish = 0;
  let remaining_durable_scooping = durable_value;
  
  
  for(let i = 0; i < goldfish; i++) {
      const weight = Number(lines[i+1]);
      // console.log(weight + ':weight');
      // ポイの耐久性が金魚の重さよりも小さかったらループを抜ける
      if(durable_value <= weight) {
        break;
      }
      
      // 耐久値が０になるまでweight を引いていき
        remaining_durable_scooping -= weight;
        // console.log(remaining_durable_scooping + ':start時のremaining_durable_scooping');
        
        if(remaining_durable_scooping > 0) {
          get_goldfish += 1;
        } else {
          // 耐久値が0以下になったら耐久値を戻し、remaining_scooping を1減らす
            remaining_scooping -= 1;
            // console.log('失敗・・・！ポイは' + remaining_scooping+'個残っている')
            
            
            // ポイが0になったらループを抜け出す
          if(remaining_scooping <= 0){
            break;
          }
            
          // 耐久値が０になって壊れたあと、ポイが残っていた場合は、もう一度すくうことができる
            remaining_durable_scooping = durable_value - weight;
            get_goldfish += 1;
            // console.log('壊れたけど、もう一度チャレンジしてすくえた')
          
        }
  }
  console.log(get_goldfish);
});