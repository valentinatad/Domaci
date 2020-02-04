let a = 70;
let b = 100;
let zbir = a + b;
let razlika = b - a;
let kolicnik = b / a;
let ostatak = b % a;
let stepen = a ** b;
console.log(zbir, razlika, kolicnik, ostatak, stepen);

//II nacin:
let znak = '+';
let x = 50;
let y = 70;
switch (znak) {
    case "+":
        console.log(x + y);
        break;
    case '-':
        console.log(x - y);
        break;
    case '/':
        console.log(x / y);
        break;
    case '%':
        console.log(x % y);
        break;
    case '**':
        console.log(x ** y);
        break;
    default:
        console.log('Unos nije ispravan.');
}



