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
  const N = Number(lines[0].split(' ')[0]);
  const Q = Number(lines[0].split(' ')[1]);
  const management_inventory = []; // パンの金額と在庫を管理
  
  //[パンの金額 , パンの在庫]の配列を作る
  for(let i = 0; i < N; i++) {
      const price = Number(lines[i+1].split(' ')[0]);
      const inventory = Number(lines[i+1].split(' ')[1]);
      management_inventory.push([price, inventory]);
  }
//   console.log(management_inventory)
  
  // buyクエリ => 'buy'だった場合に個数を配列として受け取り処理する ex)['1', '2']
  const buy_query = array => {
      let cost = 0;
      let judgement = true;
      
      // まず、全てのパンが注文できるのか確認 => ここの場合わけができていなかった。。。
      for(let j = 0; j < N; j++) {
          if(management_inventory[j][1] < Number(array[j])) {
          judgement = false;
          break;
          }
      }
      
      if(judgement) {
          for(let i = 0; i < N; i++) {
              const target_price = management_inventory[i][0];
              const order = Number(array[i]); // 注文個数
             
                  management_inventory[i][1] -= order;
                  cost += target_price * order;
            }
          
      }
      judgement ? console.log(cost) : console.log('-1');
  };
  
  //bakeクエリ => 'bake'だった場合に個数を配列として受け取り処理する ex)['0', '1']
  const bake_query = array => {
      for(let i = 0; i < N; i++) {
          const order = Number(array[i]); // 注文個数
          management_inventory[i][1] += order;
      }
    //   console.log(management_inventory);
  };
  
  // 入力をbayクエリとbakeクエリで場合わけして処理する
  for(let i = 0; i < Q; i++) {
      const input = lines[i + N + 1].split(' ');
      const query = input.shift();
      const order_array = input;
    //   console.log('=====================')
    //   console.log(query);
    //   console.log(management_inventory)
    //   console.log(order_array)
      query === 'buy' ? buy_query(order_array) : bake_query(order_array);
    //   console.log(management_inventory)
  }
  
});