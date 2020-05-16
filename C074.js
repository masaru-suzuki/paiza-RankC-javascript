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
    
    
    // 文字列全て、配列にする
    const height = lines[0].split(' ')[0];
    const width = lines[0].split(' ')[1];
    
    const changedWidth = lines[0].split(' ')[2];
    const changedHeight = Math.ceil(height * width / changedWidth);
    
    let array = [];
    
    for(let i = 0; i < height; i++){
        let target = lines[i+1].split('');
        target.forEach(function(value,index) {
            array.push(value);
        });
    }
    
    
    // 改変した行ごとに当てはめていく

    
    for(let j = 0; j < changedHeight; j++){
        let output = [];
        
        for(let k = 0; k < changedWidth; k++) {
            output.push(array.shift());
        }
        console.log(output.join(''));
        
    }
    
});