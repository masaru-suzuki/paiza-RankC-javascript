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
  const member = Number(lines[0]);
  const match = member * (member - 1) / 2;
  const result = [];
  
//   N_1 ~ N_Nまでの配列を作る
for(let h = 0; h < member;h++){
    result.push([...Array(member)]);
    result[h][h] = '-';
}
  
// for文で[match]回繰り返す => 対戦票を元に配列内の任意の位置に[W , L]の文字を入力する
for(let i = 0; i < match; i++) {
    const winner = Number(lines[i + 1].split(' ')[0]) - 1;//インデックスなので-1をしている
    const loser = Number(lines[i + 1].split(' ')[1]) - 1;
    // [W,L]の入力
    result[winner][loser] = 'W';
    result[loser][winner] = 'L';
}

for(let j = 0; j < member; j++) {
    console.log(result[j].join(' '));
}

});