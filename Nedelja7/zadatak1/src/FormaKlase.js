import React from 'react';
class FormaKlase extends React.Component{
    render(){
        return(<>
        <input type = "text"></input>
        <button>{this.props.text}</button> </>)
    }
}
export default FormaKlase;