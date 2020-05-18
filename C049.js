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
  const movedCount = lines[0];
  let startFloor = 1;
  let result = 0;
  
  for(let i = 0; i < movedCount; i++) {
      
      const floor = lines[i+1];
      let movedFloor = Math.abs(floor - startFloor);
    //   console.log(movedFloor + 'movedFloor');
      
      result += movedFloor;
      
      startFloor = lines[i+1];
    //   console.log(startFloor + 'startFloor')
  }
  console.log(result);
});