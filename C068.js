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
  const secretMessage = lines[1].split('');
  const N = Number(lines[0]);
//   console.log(secretMessage);
//   console.log(N)
  
  // アルファベット配列を作る
  const Range = (first, last) => {
	first = first.charCodeAt(0);
	last = last.charCodeAt(0);
	let result = [];
	for(let i = first; i <= last; i++) {
            result.push(String.fromCodePoint(i));
	}
	return result;
  };
  const alphabet = Range('A', 'Z');


  // 配列をN文字文ずらす（正方向と逆方向に)
  const forwardArray = (array, N) => {
      let newArray = array.concat(array.slice(0,N));
      newArray.splice(0,N);
      return newArray;
  };
  const reverseArray = (array, N) => {
      let newArray = array;
      newArray = array.slice(-N).concat(array);
      newArray.splice(-N);
      return newArray;
  };

  const result = [];
  for(let i = 0; i < secretMessage.length; i++) {
      // 文字列をアルファベットの中で何文字目か判定する(インデックス)
      const index = Number(alphabet.indexOf(secretMessage[i]));
      if(i%2 != 0) {
          result.push(forwardArray(alphabet, N)[index]);
      }else {
          result.push(reverseArray(alphabet, N)[index]);
      }
  }
  console.log(result.join(''));

});