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

  // 最大の数が頭にくれば大丈夫
  // ex[2,4,6,8]なら、62+84 or 64+82で最大化できる


    const nums = [];
    // 配列にする
    for(let i = 0; i < 4; i++) {
        nums.push(Number(lines[0].split(' ')[i]));
    }
    // 並び替える
    nums.sort(function(a,b){
        if( a < b ) return -1;
        if( a > b ) return 1;
        return 0;
    });
    console.log((nums[3]+nums[2])*10 + nums[1] + nums[0]);

});