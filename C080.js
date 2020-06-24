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
  const btn = Number(lines[0].split(' ')[0]);
  let limit = Number(lines[0].split(' ')[1]);
  const push_count = Number(lines[1]);
  const push_btn_arr = lines[2].split(' ');
  let correct = 0;
  let correct_btn = [];
  for(let i = 0; i <push_count; i++) {
      
  }
  
  for(let i = 0; i < push_count; i++) {
      const push_btn = Number(push_btn_arr[i]);
      let correct_number = (i+1) % btn;
      if(correct_number === 0) {
          correct_number = btn;
      }
    //   console.log(push_btn)
    //   console.log(correct_number)
      push_btn === correct_number ? correct += 1: limit -= 1;
    //   console.log(correct)
    //   console.log(limit)
    //   console.log('===========')
  }
  limit >= 0 ? console.log(correct * 1000) : console.log(-1);
});