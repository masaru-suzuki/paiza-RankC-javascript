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


  const times = lines[0];
  for(let h = 0; h < times; h++) {

      const target = lines[h+1];
      const arr = target.split('');
      
      var sameArr = arr.filter(function (x, i, self) {
        return self.indexOf(x) === i && i !== self.lastIndexOf(x);
      });

      const result = arr.find(n => n == arr[i]);

      
      if(sameArr.length === 0) {
          console.log('No Pair');
      } else if(sameArr.length === 1){
          let count = 0;
          for(let j = 0; j <arr.length; j++){
              if(sameArr == arr[j]) {
                  count++;
              }
              
          }
          switch(count) {
              case 2:
                  console.log('One Pair');
                  break;
              case 3:
                  console.log('Three Card');
                  break;
              case 4:
                  console.log('Four Card');
                  break;
              default:
                  console.log('error');
          }
      } else if (sameArr.length === 2) {
          console.log('Two Pair');
      }
      
    
  }
});