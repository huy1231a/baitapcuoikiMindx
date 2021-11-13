 
var arr = [
  'BINH', 'HUNG', 'PHUOC', 'CAO', 'KHANH'
];

var lgth = 0;
var longest;

for (var i = 0; i < arr.length; i++) {
  if (arr[i].length > lgth) {
    var lgth = arr[i].length;
    longest = arr[i];
  }
}

console.log(longest);

function find(array) {
  var longestWord = "";

  array.forEach(function(word) {
    if(word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}

var word = find(['BINH', 'HUNG', 'PHUOC', 'CAO', 'KHANH']);
console.log(word); // result is "jumped"

