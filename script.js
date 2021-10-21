const alphabeticOrder = (str) => [...new Set(str)].sort().join(''); //функцию вынесла отдельно для ясности, избавляется от повторений и сортирует символы

function findUniq(strings) {
  let s = [];
  for (let i = 0; i < strings.length; i++) {
    let word = strings[i].toLowerCase().split(" ").join(""); //избавляемся от пробелов
    s.push(alphabeticOrder(word)); //располагаем уникальные символы в алфавитном порядке. Можно было сделать и через reduce
    }
  
  for (let i = 0; i < s.length; i++) {
    let firstI = s.indexOf(s[i]);                            
    let lastI = s.lastIndexOf(s[i]);  
    if (firstI === lastI) //проверяем, уникален ли набор символов
      return strings[firstI];
    }
    return -1;
}
//алгоритм неэффективный, но эффективнее я еще не придумала.. 
