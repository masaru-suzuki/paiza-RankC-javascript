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
  const H = Number(lines[0].split(' ')[0]);
  const W = Number(lines[0].split(' ')[1]);
  
  const start_h = Number(lines[1].split(' ')[0]) - 1;
  const start_w = Number(lines[1].split(' ')[1]) - 1;
  
  let direction = 0; //北0 東1 南2 西3 の時計回り
  let rat = [start_h, start_w];//鼠小僧の座標
  
  let coordinate = [];
  
  // 座標を完成させる
  for(let i = 0; i < H; i++) {
      const line = lines[i+2].split('');
      coordinate.push(line);
  }
  
//   console.log(rat) // 鼠小僧の位置
//   console.log(coordinate)// 座標
  

  // 庶民か富豪かを入力すると向きを変更させるfunction
  const changeDirection = (direction, rp) => {
      let result = 0;
      switch(direction) {
          case 0:
              rp === '.' ? result = 1 : result = 3;
              break;
          case 1:
            rp === '.' ? result = 2 : result = 0;
              break;
          case 2:
              rp === '.' ? result = 3 : result = 1;
              break;
          case 3:
              rp === '.' ? result = 0 : result = 2;
              break;
      }
      return result;
  };
  
  // 鼠小僧の座標を移動させるfunction
  const movement = (direction) => {
      switch(direction){
          case 0:
              rat[0] -= 1;
              break;
          case 1:
              rat[1] += 1;
              break;
          case 2:
              rat[0] += 1;
              break;
          case 3:
              rat[1] -= 1;
              break;
      }
  };
  
  // 鼠小僧の座標が枠内にあるか判定するfunction
  let judgement = true;
  const judgement_rat = rat => {
      rat[0] < 0 || rat[0] >= H || rat[1] < 0 || rat[1] >= W ? judgement = false : judgement = true;
  };

  
  // ルートを抜けるまで繰り返し
  while(judgement) {
      let rp = coordinate[rat[0]][rat[1]];
      
      //向きを変更
      direction = changeDirection(direction, rp);
      
      // 貧富を反転
      rp === '.' ? coordinate[rat[0]][rat[1]] = '*' : coordinate[rat[0]][rat[1]] ='.';
      
      // 座標を移動
      movement(direction);
      
      // 鼠小僧が町内にいるか判定
      judgement_rat(rat);
  }
  
  // 回答を出力
  for(let i = 0; i < H; i++) {
      console.log(coordinate[i].join(''));
  }

});