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
  const target1 = lines[0].split(' ')[0];
  const target2 = lines[0].split(' ')[1];
  
  // アルファベットファイ列を作成
  function Range(first, last) {
	var first = first.charCodeAt(0);
	var last = last.charCodeAt(0);
	var result = new Array();
	for(var i = first; i <= last; i++) {
            result.push(String.fromCodePoint(i));
	}
	return result;
  }
  let alphabet = Range('a', 'z');
  

// console.log(alphabet)

  // アルファベット配列を数字の配列に変換するfuction
  const alphabetToNumber = str => {
      const str_array = str.split('');
      let converted_arr = [];
      
      for(let i = 0; i < str_array.length; i++) {
          const index = alphabet.indexOf(str_array[i]) + 1;
          converted_arr.push(index);
      }
      return converted_arr;
  };
  
  // 名前の配列（数字）を生成
  const target1_arr = alphabetToNumber(target1);
  const target2_arr = alphabetToNumber(target2);
//   console.log(target2_arr)


  // 配列の要素から相性を数値化するfunction
  const output_sum = arr => {
      let optput_arr = arr;
      
      while(optput_arr.length > 1){
        let new_arr = [];
        
        for(let i = 0; i < optput_arr.length - 1; i++) {
            const sum = optput_arr[i] + optput_arr[i+1];
            // 101以上だったら101を引く処理
            sum <= 101 ? new_arr.push(sum) : new_arr.push(sum - 101);
        }
        
        optput_arr = new_arr;
      }
      return optput_arr[0];
  };
  
  
  // 配列から相性数値を出力するfunction
  const col_compatibillity = (arr1, arr2) => {
      // 2パターンの結合した配列を生成
      const coalascing_arr1 = arr1.concat(arr2);
      const coalascing_arr2 = arr2.concat(arr1);
      // console.log(coalascing_arr2)
    
      // 配列の要素を足していく
      const result1 = output_sum(coalascing_arr1);
      const result2 = output_sum(coalascing_arr2);
      
      // 大きい方の相性数値を出力
      result1 >= result2 ? console.log(result1) : console.log(result2);
      
    
    
    
  };
  
  col_compatibillity(target1_arr, target2_arr);
  
  
});