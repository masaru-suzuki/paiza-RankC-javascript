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
  const N = Number(lines[0]);
  const convert = (word, type) => {
      switch(type) {
          case 'es':
              word.push('es');
              console.log(word.join(''));
              break;
          case 'f':
              word.pop();
              word.push('ves');
              console.log(word.join(''));
              break;
          case 'fe':
              word.splice(-2);
              word.push('ves');
              console.log(word.join(''));
              break;
          case 's':
              word.push('s');
              console.log(word.join(''));
              break;
          case 'y':
              word.pop();
              word.push('ies');
              console.log(word.join(''));
              break;
      }
  };
  for(let i = 0; i < N; i++) {
    const word = lines[i+1].split('');
    let end = word[word.length - 1];
    let before_end = word[word.length - 2];
    // console.log(end)
    // console.log(before_end)
    switch(end) {
        case 's':
            convert(word, 'es');
            break;
        case 'o':
            convert(word, 'es');
            break;
        case 'x':
            convert(word, 'es');
            break;
        case 'f':
            convert(word, 'f');
            break;
        case 'e':
            before_end === 'f' ? convert(word, 'fe') : convert(word, 's');
            break;
        case 'h':
            before_end === 's' || before_end ==='c' ? convert(word, 'es') : convert(word, 's');
            break;
        case 'y' :
            before_end !== 'a' && before_end !== 'i' && before_end !== 'u' && before_end !== 'e' && before_end !== 'o' ? convert(word , 'y') : convert(word, 's');
            break;
        default:
            convert(word, 's');
            break;
    }
    
    

  }
});