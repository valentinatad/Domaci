import React, { useState } from 'react';
import './App.css';
const App = () => {
  const [users,setUsers] = useState([])
  const [name,setName] = useState('')
  const [number,setNumber] = useState('')  
  const [inputValue, setInputValue] = useState('')
  const [filtriranNiz, setFiltriranNiz] = useState([])
  const [alert, setAlert] = useState('')
  const [string, setString]=useState('')
  
  
  const replace = (index) => {
    let niz = [...users]
    niz[index].number = number
    setUsers(niz)
    setAlert('')
    
  }  
  const handleSubmit = (e) => {
    e.preventDefault()
    setAlert('')
    if(name==='' || number==='') {
      setAlert('Oba polja moraju biti ispunjena')
      return
    }
    if(!number.startsWith('+')) {
      setAlert('Broj mora poceti sa znakom +')
      return
    }
    if(name !== '' || number !== ''){
      let index = users.findIndex((user) => user.name.toLowerCase() === name.toLowerCase())
      if(index !== -1){
      
        setAlert('Korisnik postoji. Zamenite broj.')
        const alert2=alert;
        if(alert2)
         {replace(index)
          }
       
        return}
      
      else{
        
        setUsers([...users,{name,number}])
        
      }
      
     }
     setNumber('')
     setName('')
     e.target.reset()
    
  return }
      
   const handleChange= (e) =>{ 
    setInputValue(e.target.value)
   
     if(inputValue!=="")
     {
    
    setFiltriranNiz(users.filter(user => user.name.toLowerCase().includes(inputValue.toLowerCase())))
    console.log(inputValue)
    setString('Trazeni broj je:')
    // console.log(filtriranNiz)
    
  
    }
  
    return}
    
  return (
    <>
    <form onSubmit={(e) => handleSubmit(e)} className="forma">
      <input type="text" onInput={(e) => setName(e.target.value)} placeholder="Ime i prezime"/>
      <input type="text" onInput={(e) => setNumber(e.target.value)} placeholder="Broj telefona"/>
      <input type="submit"/>
      
    </form>
    <input type="text"  onChange={(e)=> handleChange(e)}  placeholder="Pronadji broj"></input>
    <p className="alert">{alert}</p>
    
    <ul>
      {users.map(x => <li key={x.name}>{x.name}  <b>{x.number}</b></li>)}
      <hr/>
      <p>{string}</p>
      {filtriranNiz.map(x => <li key={x.name}> {x.name}  <b>{x.number}</b></li>)}
    </ul>
    </>
  )
}
export default App;