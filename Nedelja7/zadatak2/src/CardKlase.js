import React from 'react';
import DescriptionKlasa from './DescriptionKlase';
import EmojiKlase from './EmojiKlase';
class CardKlase extends React.Component{
    render(){
        return(
            <>
            <DescriptionKlasa description={this.props.description}></DescriptionKlasa>
            <EmojiKlase url={this.props.url}></EmojiKlase></>
        )
    }
}
export default CardKlase;