var num = prompt('Enter your age')

switch (num <= num) {
    case num <= 18:
        alert('You are still young, you need to learn')
        break;
    case num <= 50:
        alert('You need to work')
        break;
    case num <= 59:
        alert('You will soon retire')
        break;
    case num <= 100:
        alert('You are a pensioner')
        break;

    default:
        alert('Something went wrong');
        break;
}

// if (num <= 18){
//     alert('You are still young, you need to learn');
// }else if (num <= 50){
//     alert('You need to work');
// }else if (num <= 59){
//     alert('You will soon retire');
// }else if (num <= 100){
//     alert('You are a pensioner');
// }else{
//     alert('Something went wrong');
// }

var hour = +prompt('Enter time')

switch (hour) {
    case 0:
        alert('Полночь')
        break;
    case 1:
        alert('Час ночи');
        break;
    case 2:
        alert('Два часа ночи')
        break;
    case 3:
        alert('Три часа ночи')
        break;
    case 4:
        alert('Четыре часа утра')
        break;
    case 5:
        alert('Пять часов утра')
        break;
    case 6:
        alert('Шесть часов утра')
        break;
    case 7:
        alert('Семь часов утра')
        break;
    case 8:
        alert('Восемь часов утра')
        break;
    case 9:
        alert('Девять часов утра')
        break;
    case 10:
        alert('Десять часов утра')
        break;
    case 11:
        alert('Одиннадцать часов утра')
        break;
    case 12:
        alert('Полдень')
        break;
    case 13:
        alert('Час дня')
        break;
    case 14:
        alert('Два часа дня')
        break;
    case 15:
        alert('Три часа дня')
        break;
    case 16:
        alert('Четыре часа дня')
        break;
    case 17:
        alert('Пять часов дня')
        break;
    case 18:
        alert('Шесть часов вечера')
        break;
    case 19:
        alert('Семь часов вечера')
        break;
    case 20:
        alert('Восемь часов вечера')
        break;
    case 21:
        alert('Девять часов вечера')
        break;
    case 22:
        alert('Десять часов вечера')
        break;
    case 23:
        alert('Одиннадцать часов вечера')
        break;

    default:
        break;
}

var a = +prompt('Enter the first number')
var b = +prompt('Enter the second number')
var c = +prompt('Enter the third number')

switch (a>b && a<c || a<b && a>c || b>a && b<c || b<a && b>c || c>a && c<b || c<a && c>b) {
    case a>b && a<c || a<b && a>c:
        alert('Average ' + a)
        break;
    case b>a && b<c || b<a && b>c:
        alert('Average ' + b)
        break;
    case c>a && c<b || c<a && c>b:
        alert('Average ' + c)
        break;
 
    default:
        break;
}

// if (a>b && a<c){
//     alert('Average ' + a);
// }else if (a<b && a>c) {
//     alert('Average ' + a)
// }else if (b>a && b<c) {
//     alert('Average ' + b)
// }else if (b<a && b>c) {
//     alert('Average ' + b)
// }else if (c>a && c<b) {
//     alert('Average ' + c)
// }else if (c<a && c>b) {
//     alert('Average ' + c)
// }

// switch (a>b && a<c || a<b && a>c || b>a && b<c || b<a && b>c || c>a && c<b || c<a && c>b) {
//     case a>b && a<c:
//         alert('Average ' + a)
//         break;
//     case a<b && a>c:
//         alert('Average ' + a)
//         break;
//     case b>a && b<c:
//         alert('Average ' + b)
//         break;
//     case b<a && b>c:
//         alert('Average ' + b)
//         break;
//     case c>a && c<b:
//         alert('Average ' + c)
//         break;
//     case c<a && c>b:
//         alert('Average ' + c)
//         break;
 
//     default:
//         break;
// }

// switch (a>b && a<c || a<b && a>c || b>a && b<c || b<a && b>c || c>a && c<b || c<a && c>b) {
//     case a>b && a<c:
//     case a<b && a>c:
//         alert('Average ' + a)
//         break;
//     case b>a && b<c:
//     case b<a && b>c:
//         alert('Average ' + b)
//         break;
//     case c>a && c<b:
//     case c<a && c>b:
//         alert('Average ' + c)
//         break;
 
//     default:
//         break;
// }

