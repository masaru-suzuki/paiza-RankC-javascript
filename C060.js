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
    
  const amountOfWord = Number(lines[0].split(' ')[0]);
  const wordsPerPage = Number(lines[0].split(' ')[1]);
  const targetPage = Number(lines[0].split(' ')[2]) - 1;
//   辞書順に単語を並べ替える
  const words = lines[1].split(' ').sort();
//   該当箇所を配列化する
  const page = words.slice(wordsPerPage * targetPage, wordsPerPage * (targetPage + 1));
//   一単語ずつ出力する
  for(let i = 0; i < page.length; i++) {
    console.log(page[i]);
  }
  
});