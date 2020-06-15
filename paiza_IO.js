process.stdin.resume();
process.stdin.setEncoding('utf8');
// Your code here!
process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！

var lines = [3,4,2,5,5,7,7,3,2,2,4,5];
  
  const input = [9,2,20];
  const goldfish = Number(input[0]);
  let remaining_scooping = Number(input[1]);
  const durable_value = Number(input[2]);
  let get_goldfish = 0;
  
  let remaining_durable_scooping = durable_value;
  
  console.log(goldfish);
  console.log(remaining_scooping);
  console.log(durable_value);
  
  
  for(let i = 0; i < goldfish; i++) {
      const weight = Number(lines[i]);
      console.log(weight + ':weight');
      
      
      // 耐久値が０になるまでweight を引いていき
        console.log(remaining_durable_scooping + ':start時のremaining_durable_scooping');
        remaining_durable_scooping -= weight;
        
        if(remaining_durable_scooping > 0) {
          get_goldfish += 1;
          console.log('get!' + get_goldfish + '匹です');
        } else {
            console.log('loos!');
        //   耐久値が0以下になったら耐久値を戻し、remaining_scooping を1減らす
            remaining_scooping -= 1;
            remaining_durable_scooping = durable_value;
            console.log(remaining_scooping+':remaining_scooping');
        }
        
        console.log(remaining_durable_scooping + 'ループ最後の:remaining_durable_scooping');
      
      // ポイが0になったらループを抜け出す
        if(remaining_scooping <= 0){
            break;
        }
      // ポイの耐久性が金魚の重さよりも小さかったらループを抜ける
        if(durable_value <= weight) {
            break;
        }
        console.log('==========================================================');
  }
  console.log(get_goldfish+'---result');
