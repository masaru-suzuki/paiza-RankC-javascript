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
  const atack = Number(lines[0].split(' ')[0]);
  const defence = Number(lines[0].split(' ')[1]);
  const speed = Number(lines[0].split(' ')[2]);
  const N = Number(lines[1]);
  let evolution = [];
  
  for(let i = 0; i < N; i++) {
      
      const name = lines[i+2].split(' ')[0];
      
      // 条件を列挙
      const minAtack = Number(lines[i+2].split(' ')[1]);
      const maxAtack = Number(lines[i+2].split(' ')[2]);
      const minDefence = Number(lines[i+2].split(' ')[3]);
      const maxDefence = Number(lines[i+2].split(' ')[4]);
      const minSpeed = Number(lines[i+2].split(' ')[5]);
      const maxSpeed = Number(lines[i+2].split(' ')[6]);
      
      // 条件をすべて満たすか確認
      if (minAtack <= atack && atack<= maxAtack && minDefence <= defence && defence <= maxDefence && minSpeed <= speed && speed <= maxSpeed) {
          evolution.push(name);
      } 
  }
  
  // 出力
  if(evolution.length === 0) {
      console.log('no evolution');
  } else {
      evolution.forEach(elm => {
      console.log(elm);
  });
      
  }
});
