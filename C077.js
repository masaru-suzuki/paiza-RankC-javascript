process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！

var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  const member = Number(lines[0].split(' ')[0]);
  const questions = Number(lines[0].split(' ')[1]);

  for (let i = 0; i < member; i++) {
    const filingDate = Number(lines[i + 1].split(' ')[0]);
    const correctAnswers = Number(lines[i + 1].split(' ')[1]);
    let score = (100 / questions) * correctAnswers;

    if (10 <= filingDate) {
      score = 0;
    } else if (1 <= filingDate) {
      score = Math.floor(score * 0.8);
    }

    if (80 <= score) {
      console.log('A');
    } else if (70 <= score) {
      console.log('B');
    } else if (60 <= score) {
      console.log('C');
    } else {
      console.log('D');
    }
  }
});
