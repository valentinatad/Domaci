import {getPastLaunches} from '../services/spacex_service'


const getOption = (data) =>{ 
 
    let {
       
        launch_year,
    } = data;
    

    console.log(data.launch_year)
    
    const option = document.createElement('option');
    
     option.innerHTML=launch_year;

    return option;
}

const SelectList = () => {
    const select = document.createElement('select');
    select.className = 'select-list';

    getPastLaunches().then(response => {
        // let data=response.data;
        let { data } = response;
        // const launch=Launch()
        
        
        data.forEach(element => {
            
             
            select.appendChild(getOption(element));
        
        });

    }, error => { console.log(error) });

    return select;
}


export {SelectList};
    

