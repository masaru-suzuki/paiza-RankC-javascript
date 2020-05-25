process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
// 失敗!!!!!!!!!!!!!!!!!!

var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
    const N = Number(lines[0].split(' ')[0]);
    let arrayTarget = lines[0].split(' ')[1].split('');
    let sampleTarget = lines[0].split(' ')[2].split('');
    let result = [];
    
    for(let i = 0; i < N; i++) {
        if(arrayTarget[0] === sampleTarget[0]){
            result.push(i);
        }
        arrayTarget.unshift(arrayTarget[N-1]);
        arrayTarget.pop();
        // console.log(arrayTarget);
    }
    console.log(result.reduce((a,b)=>Math.min(a,b)));

  
});