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
  const taxi = Number(input[0]);
  const distance = Number(input[1]);
  const price = [];
  
  for(let i = 0; i < taxi; i++) {
      const first_distance = Number(lines[i+1].split(' ')[0]);
      const first_fare = Number(lines[i+1].split(' ')[1]);
      const additional_distance = Number(lines[i+1].split(' ')[2]);
      const additional_fare = Number(lines[i+1].split(' ')[3]);
      let cost = 0;
      
      
    //   console.log('=================================')
    //   console.log(first_distance);
    //   console.log(first_fare);
    //   console.log(additional_distance);
    //   console.log(additional_fare);
    //   console.log('=================================')
      
      
      // 料金の計算
      
      //初乗り距離未満の場合
      if(distance < first_distance) {
          cost = first_fare;
          price.push(cost);
        //   console.log(cost + '初乗り運賃')
          
      // 初乗り距離と同じ距離の場合
      } else if(distance === first_distance) {
          cost = first_fare + additional_fare;
          price.push(cost);
        //   console.log(cost + '初乗り距離と同じパターン')
          
          
      // 初乗り距離より長い場合
      } else {
        //   console.log('初乗り距離よりも長い移動をするパターン')
          const left_distance = distance - first_distance;
          let unit = 0;
          
        //   console.log(left_distance + ':left_distance');
          
          if(left_distance % additional_distance) {
              unit = Math.ceil(left_distance / additional_distance);
          } else {
              unit = left_distance / additional_distance + 1;
          }
          
        //   console.log(unit + ':unit');
          const cost = first_fare + additional_fare * unit;
        //   console.log(cost + ':cost')
          price.push(cost);
      }
      
    //   console.log('============================')
  }
  
  
    //   console.log(price)
      
      
      // 最小値と最大値の出力
      const result = price => {
          const array_max = function(a, b) {return Math.max(a, b);};
          const array_min = function(a, b) {return Math.min(a, b);};
          let max = price.reduce(array_max);
          let min = price.reduce(array_min);
          console.log(min + ' ' + max);
      };
      
      result(price);
      
      
});