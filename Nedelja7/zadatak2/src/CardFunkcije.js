import React from 'react';
import DescriptionFunkcije from './DescriptionFunkcije';
import EmojiFunkcije from './EmojiFunkcije';
const CardFunkcije = ({description, url}) => {
    return(<><DescriptionFunkcije opis={description}></DescriptionFunkcije>
            <EmojiFunkcije url={url}></EmojiFunkcije> </>)
}
export default CardFunkcije;