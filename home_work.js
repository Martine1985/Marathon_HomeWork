'use strict';
// Первая задача

const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getRow(firstRow, secondRow) {
    let mass_1 = [];
    let num_1 = 0;
    mass_1 = firstRow;
    for(let key of mass_1){
        if(key === 'а'){
            num_1++;
        }

    }
    let mass_2 = [];
    let num_2 = 0;
    mass_2 = secondRow;
    for(let key of mass_2){
        if(key === 'а'){
            num_2++;
        }
    }
    if(num_1 > num_2) return firstRow;
    else return secondRow;
}

console.log(getRow(firstRow,secondRow ));


// Вторая задача
//Решение 1.

function formattedPhone(phone) {

    return `+${phone[1]} (${phone[2]}${phone[3]}${phone[4]}) ${phone[5]}${phone[6]}${phone[7]}-${phone[8]}${phone[9]}-${phone[10]}${phone[11]}`;
}
console.log(formattedPhone('+71234567890'));

//Решение 2.

function formattedPhone_2(phone){
    let ph_one = new String(phone).replace(/[^\d]+/g, "");
    let ph_format = "";
    ph_format = ph_one.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, "+$1 ($2) $3-$4-$5");
    return ph_format;
}

console.log(formattedPhone_2('+71234567890'));