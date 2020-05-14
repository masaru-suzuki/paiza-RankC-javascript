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
    
  const formulaArray =  lines[0].split(' ');
  const a = Number(formulaArray[0]);
  const b = Number(formulaArray[2]);
  const c = Number(formulaArray[4]);
  const op = formulaArray[1];
  
  let position = '';
  
  for(let i = 0; i < formulaArray.length; i++) {
      if(formulaArray[i] == 'x') {
          position = i;
      }
  }
  
  if (op === '-') {
      switch (position) {
          case 0:
            console.log(b + c);
            break;
        case 2:
            console.log(a - c);
            break;
        case 4:
            console.log(a - b);
            break;
        default:
            consol.log('err');
      }
        
  } else if (op === '+') {
      
      switch (position) {
          case 0:
            console.log(c - b);
            break;
        case 2:
            console.log(c - a);
            break;
        case 4:
            console.log(a + b);
            break;
        default:
            consol.log('err');
      }
      
  }
  
  
});

