


let get_longest_common_s = function(word1, word2){
  let memo = [... Array(word1.length)].map(e=> Array(word2.length));
  let result = function(word1, word2, i1, i2){
    if(i1==word1.length || i2 == word2.length) return "";
    if(memo[i1][i2] !== undefined) return memo[i1][i2];

    if(word1[i1] == word2[i2]){
      memo[i1][i2] = word1[i1] + result(word1, word2, i1+1, i2+1);
      return memo[i1][i2];
    } else {
      let w1 = result(word1, word2, i1+1, i2);
      let w2 = result(word1, word2, i1, i2+1);
      let w1l = w1.length;
      let w2l = w2.length;
      let r;
      if(w1l>= w2l){
        r = w1;
      }else if(w1l < w2l){
        r = w2;
      }
      memo[i1][i2] = r;
      return memo[i1][i2];
    }
  };
  return result(word1, word2,0,0);
};


console.log(get_longest_common_s('Cristian', 'Christian'));
