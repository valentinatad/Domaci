import React, { useState, useEffect } from 'react';
import './App.css';
import { getRadnika, posaljiRadnika } from './services/Apicontainer';
import { Radnik } from './components/Radnik';

const App=()=> {
  const [nizRadnika, setNizRadnika] = useState([]);
  const [inputText, setInputText] = useState('');
  const [inputNumber, setInputNumber] = useState('');
  const [option, setOptionValue] = useState();
  
  const posaljiRadnikaPodatke = async ()=> {
    if(inputNumber===""&& inputText==="")
    {alert("Oba polja moraju biti popunjena")
  return}
    else
    {await posaljiRadnika(inputText, inputNumber).then(response=>console.log(response))}
    
  }
  
  useEffect(()=>{getRadnika().then(response=> setNizRadnika(response.data.data))},[])
  const izaberiBrojRadnika=(e)=>{
      setOptionValue(e.target.value)
      console.log(option)
      if(option===undefined) {return}
      if(option === '8') {
        console.log('hahaha')
        // onClick1=(e)=>
        //  {setNizRadnika(nizRadnika.slice(0,5))
        //  }
        // onClick2=(e)=>
        //  {setNizRadnika(nizRadnika.slice(6, 11))
        //  }
        //  onClick3=(e)=>
        //  {setNizRadnika(nizRadnika.slice(12, 18))
        //  }
        // onClick4=(e)=>
        //  {setNizRadnika(nizRadnika.slice(19, 24))}
         return
      }
    
  }

  return (<>
  <select onClick={(e)=>{izaberiBrojRadnika(e)}}>
    <option>Izaberi broj radnika po strani</option>
    <option value="6">6</option>
    <option value="8">8</option>
  </select>
    {nizRadnika.map(radnik=><Radnik radnik={radnik}></Radnik>)}
    <input type="text" placeholder="Ime i prezime" onInput={(e)=>setInputText(e.target.value)}></input>
    <input type="number" placeholder="Plata" onInput={(e)=>setInputNumber(e.target.value)}></input>
    <button onClick={(e)=>{posaljiRadnikaPodatke(e)}}>Posalji podatke</button>
    {/* <button onClick={(e)=>onClick1(e)}>1</button>
    <button onClick={(e)=>onClick2(e)}>2</button>
    <button onClick={(e)=>onClick3(e)}>3</button>
    <button onClick={(e)=>onClick4(e)}>4</button> */}
       </>
  );
}

export default App;
