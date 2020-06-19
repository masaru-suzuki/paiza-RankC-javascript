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
  const tree = Number(input[0]); // 木の本数
  const safty_standard = Number(input[1]);
  const light_on_tree = [];
  const investigation = Number(lines[2]);
  
  
//   配列の平均を求めるfunction
  const col_ave = (array) => {
      // 配列の合計を計算
      const sum = array.reduce(function(acc, cur) {
          return acc + cur;
      });
      // 平均を出力
      return Math.floor(sum / array.length);
  };
  
  // 調査区間の電球の平均を求めるfunction
  const cal_ave_lights = (start, end) => {
      // startからendまでのライトを配列にする
      const target = light_on_tree.slice(start-1, end);
      
      //配列の平均を求める
      return col_ave(target);
  };
  
  //足りない電球を求めるfunction ただし、0以下の時は０
        const cal_needed_light = ave_lights => {
          let less = safty_standard - ave_lights;
          if(less >= 0) {
              return less;
          } else {
              return 0;
          }
      };
  
  
  // 各木の電球の数を配列にする
  for(let h = 0; h < tree; h++){
      const lights = Number(lines[1].split(' ')[h]);
      light_on_tree.push(lights);
  }
  
  // 足りない電球をそれぞれの木に加算する
  for(let i = 0; i < investigation; i++) {
      const start = Number(lines[i+3].split(' ')[0]);
      const end = Number(lines[i+3].split(' ')[1]);
      
      // startからendまでのライトの平均値を求める
      const ave_lights =cal_ave_lights(start, end);

      // 足りない電球を求める
      const needed_light = cal_needed_light(ave_lights);
      
      // 調査区間のstart位置からend位置まで足りない電球を加算
      for(let j = 0; j < end - start + 1; j++) {
          light_on_tree[start-1+j] += needed_light;
      }
      
  }
      console.log(light_on_tree.join(' '));
  
});