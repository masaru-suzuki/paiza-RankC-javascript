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
  
  const t = lines[0];
  const fill = lines[1];
  let unmatched = [];
  
  for(let i = 0; i < t; i++) {
    const str = lines[i+2];
    if ( str.match(fill)){
      console.log(str);
    } else {
      unmatched.push(str);
    }
  }
  
  if(unmatched.length == t){
      console.log('None');
  }
 
});