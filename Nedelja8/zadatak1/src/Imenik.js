import React from 'react';

export class Imenik extends React.Component {
      
    constructor(){
        super();
        
        this.state={
            ime:"",
            broj:"",
            provera:"",
            imenik:[] 
           }
        
        this.handleInputChange1=(event)=>{
            this.setState({
                ime:event.target.value
            })
        }
        
        this.handleInputChange2=(event)=>{
            this.setState({
                broj:event.target.value
            })
        }
        this.handleInputChange3=(event)=>{
            
            this.setState({
                
                provera:event.target.value
            
                
                
            })
        }
        
        this.addContact=(e)=>{
            e.preventDefault()
            const Kontakt={
                ime:this.state.ime,
                broj:this.state.broj         
            }
            
            if(this.state.ime==="" || this.state.broj==="")
            {
                alert('Oba polja su obavezna.');
                return;
            }
            if(!this.state.broj.includes("+"))
            {
                alert('Mora poceti sa znakom +')
                return
            }
            
            
            this.setState((imenik2) =>({
                
                imenik:imenik2.imenik.concat(Kontakt),
                ime:"",
                broj:""
            }))
             
        }
           this.proveriIme=(e)=>{
               e.preventDefault();
               const filteredList=this.state.lista.filter(kontakt=>this.state.provera.includes(kontakt.ime))
               this.setState({
                   lista: filteredList
               })
           }
        
    }

  render() {
      
      return(<><div>
              <form>
                <input type="text"  onChange={this.handleInputChange1} value={this.state.ime} placeholder="Ime" />
    
                <input type="text"  onChange={this.handleInputChange2} value={this.state.broj} placeholder="Broj telefona"/>
                <button onClick={this.addContact}>Add contact</button>
              <input type="text" onChange={this.handleInputChange3} value={this.state.provera}  placeholder="Pretrazi kontakte"></input>
              
            </form>
              </div>

        
        <div className="App">
        <h2>Imenik</h2>
        
        {this.state.imenik.map(contact =>
           <div>
           <h5>{contact.ime}</h5>
           <p>{contact.broj}</p>
           <hr/>
          </div>
  )} 
        </div>
      
   </>
    );
  }
}