'use strict'

let price = prompt("Введите стоимость товара");
if(price<0 || isNaN(Number(price))){
    console.log('Неверный формат')
}
else{
    let mine = prompt("Введите количество денег");
    if(mine<0 || isNaN(Number(mine))){
        console.log('Неверный формат')
    }
    else{
        let otvet = (price==mine) ? 'Покупка совершена' : 
        (price<mine) ? `Сдача ${mine-price} p.` :
        `Для покупки не хватает ${price-mine} р.`
        console.log(otvet);
    }
}


let c = prompt("Введите число");
if(c>0){alert('1')}
else if(c==0){alert('0')}
else{alert('-1')}


let a =Number(prompt("Введите число"));
let b = Number(prompt("Введите число"));
let result = (a + b < 4) ? 'Мало' : 
'Много';
console.log(result);


let login = prompt("Введите логин");
let message = (login == 'Сотрудник') ? 'Привет' : 
(login == 'Директор') ? 'Здравствуйте' : 
(login == '') ? 'Нет логина' :
'Неверно'
console.log(message); 



let login1 = prompt("Введите логин");
if(login1=='Админ'){
    let pass = prompt("Введите пароль");
    if(pass=='Я главный'){
        console.log('Здравствуйте');
    }
    else if( pass == '' || !isNaN(pass)){
        console.log('Отменено');
    }
    else{
        console.log('Неверный пароль')
    }
}
else if(login1 == '' || !isNaN(login1)){
    console.log('Отменено');
}

else{
    console.log('Я вас не знаю');
}








