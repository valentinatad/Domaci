let pCount = document.querySelector('#count');
let btnPica  = document.querySelector('#pica');
let count = 0;
btnPica.addEventListener("click", ()=>{
    count++;
    pCount.innerHTML = count;
})
let pTekst = document.querySelector('#pTekst')
let btnText = document.querySelector('#tekst');
btnText.addEventListener("click", ()=> {
    let date =new Date();
    if(count > 0) {
        pTekst.innerHTML =`You ordered ${count} pizza.<br>${date.getDate()}.${date.getMonth()}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
        
    }
    if(count > 0) {
        pCount.innerHTML = 0; 
    }
    else {
        pTekst.innerHTML = 'Your order is not complete.'
    }
})
let pCount1 = document.querySelector('#count1');
let btnPica1  = document.querySelector('#pica1');
let count1 = 0;
btnPica1.addEventListener("click", ()=>{
    count1++;
    pCount1.innerHTML = count1;
})
let pTekst1 = document.querySelector('#pTekst1')
let btnText1 = document.querySelector('#tekst1');
btnText1.addEventListener("click", ()=> {
    let date =new Date();
    if(count1 > 0) {
        pTekst1.innerHTML =`You ordered ${count} pizza.<br>${date.getDate()}.${date.getMonth()}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
        
    }
    if(count1 > 0) {
        pCount1.innerHTML = 0; 
    }
    else {
        pTekst1.innerHTML = 'Your order is not complete.'
    }
})
