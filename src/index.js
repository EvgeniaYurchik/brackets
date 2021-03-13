module.exports = function check(str, bracketsConfig) {
  let arr1 = str.split('');
  let arr2 = [];
  let char, last;
  for (let i = 0; i < arr1.length; i++) {
    char = str[i];
    let numb = /\d/;
    let a = +char.match(numb);
    if (char == "[" || char == "(" || char == "{") {
      arr2.push(char);
    } else if (char == "]") {
      if (arr2.length>0) {
        last = arr2[arr2.length-1];
        if (last == "[") {
          arr2.pop()
        }
      } else {
        arr2.push(char);
      }
    } else if (char == ")") {
      if (arr2.length>0) {
        last = arr2[arr2.length-1];
        if (last == "(") {
          arr2.pop()
        }
      } else {
        arr2.push(char);
      }
    } else if (char == "}") {
      if (arr2.length>0) {
        last = arr2[arr2.length-1];
        if (last == "{") {
          arr2.pop()
        }
      } else {
        arr2.push(char);
      }
    } else if (char == "|") {
      if (arr2.length>0) {
        last = arr2[arr2.length-1];
        if (last == "|") {
          arr2.pop()
        }
      } else {
        arr2.push(char);
      }
    }
    else {
      if (arr2.length>0) {
        last = arr2[arr2.length-1];
        if (last == a) {
          arr2.pop();
        } else {
        if (arr2.includes(a-1) && a < 7) {
          let index = arr2.indexOf(a-1);
          arr2.splice(index, 1);
        } else {
          arr2.push(a);
        }
      }}
      else {
        arr2.push(a);
      }
    }
  }
  return arr2.length==0;
}