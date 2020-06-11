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
  const hateNumber = String(lines[0]);
  const N = Number(lines[1]);
  const rooms = [];
  for(let i = 0; i < N; i++){
      const room = lines[i+2].split('');
      if(!room.includes(hateNumber)){
          rooms.push(Number(lines[i+2]));
      }
  }
//   console.log(rooms);
if(rooms.length) {
    rooms.forEach(room => console.log(room));
} else {
    console.log('none');
}
  
});