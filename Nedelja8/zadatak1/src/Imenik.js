import React from 'react';

export class Imenik extends React.Component {
      
    constructor(){
        super();
        
        this.state={
            ime:"",
            broj:"",
            provera:"",
            imenik:[{ime:"jojo", broj:"+90909"}], 
            alert1:""
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
            this.state.alert1=""
            const Kontakt={
                ime:this.state.ime,
                broj:this.state.broj         
            }
            
    
            if(this.state.imenik.forEach(kontakt=>Kontakt.ime.includes(kontakt.ime)))
            { 
                this.setState({
                    alert1:"Uneli ste vec postojeci broj",
                    broj:""

                })
                return
            }
            if(this.state.ime==="" || this.state.broj==="")
            {
             this.setState({
                 alert1:"Oba polja moraju biti popunjena",
                 ime:"",
                 broj:""
             })
            return
            
            }
            if(!this.state.broj.includes("+"))
            {
               this.setState({
                   alert1:"Broj mora poceti sa znakom +",
                   ime:"",
                   broj:""
               })

               return
            }
            
            
            this.setState((imenik2) =>({
                
                imenik:imenik2.imenik.concat(Kontakt),
                ime:"",
                broj:""
            }))
             
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
        <p>{this.state.alert1}</p>
        
        <h2>Imenik</h2>
        {this.state.imenik.filter(Kontakt=>this.state.provera.includes(Kontakt.ime)).map(contact=><div>
            <h1>Trazeni broj je:</h1>
           <h5>{contact.ime}</h5>
           <p>{contact.broj}</p>
           <hr/>
          </div>)
          }
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