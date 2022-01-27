// 05) Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты. Скрипт должен обработать полученный номер и показать на странице последние 4 цифры а остальные цифры карты должны заменены на *.
// Пример: "Номер вашей карты: **********1245"

let userCard = prompt("Please enter your card number as bellow", 12345678912345);

let userCardHiden = userCard.replace(userCard.slice(0, -4), "**********");

document.write(`Dear costumer you are using this card: ${userCardHiden} <br>`);