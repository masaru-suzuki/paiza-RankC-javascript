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
  const T = Number(input[0]);
  const start_x = Number(input[1]);
  const star_y = Number(input[2]);
  let position = [start_x, star_y];
  let trajectory_x = [start_x];
  
  for(let i = 0; i < T; i++) {
      const move_x = Number(lines[i+1].split(' ')[0]);
      const move_y = Number(lines[i+1].split(' ')[1]);
      let position_x = position[0] + move_x;
      let position_y = position[1] + move_y;
      
      trajectory_x.push(position_x);
      if(position_y <= 0) {
          break;
      }
      position = [position_x, position_y];
  }
  console.log(Math.max(...trajectory_x));
});