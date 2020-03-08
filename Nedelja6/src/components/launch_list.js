import { getPastLaunches } from '../services/spacex_service'
import {Launch, nizLaunch} from './launch';
//Add filters
console.log(nizLaunch)
const LaunchList = (nizLaunch) => {
    console.log(nizLaunch)
    const div = document.createElement('div');
    div.id = 'launch-list';

    getPastLaunches().then(response => {
        // let data=response.data;
        let { data } = response;

        // const launch=Launch()
        data.forEach(element => {
            div.appendChild(Launch(element));
        });

    }, error => { console.log(error) });

    return div;
}

export  {LaunchList};