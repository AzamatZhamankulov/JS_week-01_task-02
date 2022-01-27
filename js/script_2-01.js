// 01) Дана строка 'ddd@bbb@ccc'. Замените все @ на '!'

let str='ddd@bbb@ccc';

let strRe=str.replaceAll("@","!");

document.write(`${strRe} <br>`);