let header=document.querySelector("#header1");
let naslov=document.querySelector("#naslov");
let date = new Date();
naslov.innerHTML = `Dostupan budžet za <br> ${date.getMonth()+1}, ${date.getFullYear()}. godine`
let prihod = document.querySelector("#prihod")
let rashod1 = document.querySelector("#rashod")
let ostatak = document.querySelector("#ostatak")
let inputText = document.createElement('input')
inputText.className = "inputText1"
inputText.placeholder="Naziv transakcije";

let inputBroj = document.createElement('input')
inputBroj.type = "number"
inputBroj.className = "inputText2"
inputBroj.placeholder = "Iznos transakcije"
let select = document.createElement('select')
let btn = document.createElement('button');
btn.textContent = 'Potvrdi';
btn.className = "btn";
let option1=document.createElement('option')
let option2=document.createElement('option')
let ispis = document.querySelector('#ispis1')
let lista = document.createElement('ul')
let li = document.createElement('li')
let listPrihod = document.querySelector('#list-prihodi')
let listRashod = document.querySelector('#list-rashodi')


option1.textContent = "+";
option2.textContent = "-";
select.appendChild(option1);
select.appendChild(option2);
ispis.appendChild(select);
ispis.appendChild(inputText);
ispis.appendChild(inputBroj);

ispis.appendChild(btn)
let zarada =[];
let rashod=[];
let novirashod = '';
let novaZarada = '';
let razlika = '';
procenat1='';


let count = 0;
btn.addEventListener('click', (e) => {
    e.preventDefault;
    if(inputBroj.value.trim() ==""|| inputText.value.trim() =="")
    {inputBroj.value="";
     inputText.value="";
     alert("Unesite naziv transakcije")
     return
     }
     if(inputBroj.value <= 0) {
         alert('Unesite broj veci od nule.')
         return;
     }
    
    if(select.value == "+") {
        let lista = document.createElement('ul')
        let li = document.createElement('li')
        let pText = document.createElement('p')
        let pBroj = document.createElement('p')
        
        pBroj.className = "red"
        
        task = {
        desc: inputText.value, 
        number: inputBroj.value,
        value: select.value,
        id: count}
        pText.textContent =`-${task.desc}`
        pBroj.textContent = `${task.value}${task.number}`;
        count++;
        li.appendChild(pText);
        li.appendChild(pBroj);
        lista.appendChild(li);
        listPrihod.appendChild(lista);
        zarada.push(parseFloat(task.number));
        novaZarada = zarada.reduce((a,b)=>(a+b));
        prihod.innerHTML = `Prihod +${novaZarada}`;
        count++;
        inputText.value = "";
        inputBroj.value = "";
        

        li.addEventListener('click', () =>
        {let btnDelete = document.createElement('button');
        btnDelete.textContent="x";
        btnDelete.className = "btnDelete";
         btnDelete.addEventListener('click', () => {
            li.remove();
            })

         li.appendChild(btnDelete)})}

        
    if(select.value == "-") {
        let lista1 = document.createElement('ul')
        let li1 = document.createElement('li')
        let pText1 = document.createElement('p')
        pText1.className = "pText";
        let pBroj1 = document.createElement('p')
        pBroj1.className = "green"
        let pProcenat= document.createElement('p')
        pProcenat.className = "green1"
        task = {
        desc: inputText.value, 
        number: inputBroj.value,
        value: select.value,
        id: count}
        rashod.push(parseFloat(task.number));
        novirashod = rashod.reduce((a,b)=>a+b);
        razlika=novaZarada - novirashod;
        procenat1 = (task.number/novaZarada)*100;
        console.log(razlika)
        console.log(novaZarada)
        procenat2 = (novirashod/novaZarada)*100;
        pText1.textContent =`-${task.desc}`
        pBroj1.textContent= `${task.value}${task.number}`
        pProcenat.textContent=` ${parseInt(procenat1)}%`;
        
        rashod1.innerHTML = `Rashod -${novirashod}dinara<br>${parseInt(procenat2)}%`;
        li1.appendChild(pText1)
        li1.appendChild(pBroj1)
        li1.appendChild(pProcenat);
        lista1.appendChild(li1);
        listRashod.appendChild(lista1); 
        
     count++;
        inputText.value = "";
        inputBroj.value = "";

        

        li1.addEventListener('click', () =>
        {let btnDelete = document.createElement('button');
        btnDelete.textContent="x";
        btnDelete.className = "btnDelete";
         btnDelete.addEventListener('click', () => {
             li1.remove();
             
         })
         li1.appendChild(btnDelete)
        
        
    })
}
        
        
    razlika = novaZarada - novirashod;
    ostatak.innerHTML=`Na racunu imate: <br> ${razlika} dinara`;})


  
