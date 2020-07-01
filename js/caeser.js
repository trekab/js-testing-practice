caeser = (string, key) => {
  alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  result = [];
  stringArr = string.split('');

  stringArr.forEach(element => {
    if(alphabet.includes(element.toLowerCase())){
      let letter = alphabet[(alphabet.indexOf(element.toLowerCase()) + key)%26];
      if(upperCase(element)){
        letter = letter.toUpperCase();
      }
      result.push(letter);
    }else{
      result.push(element);
    }
  });
  return result.join('');
}

function upperCase(c){
  return c === c.toUpperCase();
}

module.exports = caeser;