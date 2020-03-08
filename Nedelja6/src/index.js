import {LaunchList} from "./components/launch_list";
import{nizLaunch, Launch} from "./components/launch"
import {getHeaderComplite} from "./components/header"
import { SelectList } from "./components/select"
const app=document.querySelector('#app');

// const header=Header()
const header=document.createElement('header');
const filters=document.createElement('section');

const launch_list=document.createElement('div')
launch_list.id = "launch-list"
launch_list.append(LaunchList());

const footer=document.createElement('footer');

app.append(header,filters,launch_list,footer);
header.appendChild(getHeaderComplite());
filters.appendChild(SelectList());
let select = document.querySelector('#select')
let option = document.createElement('option')
option.textContent = "Sva lansiranja"
select.append(option);

   select.addEventListener('change', () => {
     launch_list.innerHTML = '';
     console.log(nizLaunch)
     
     let nizGodina = [];
     nizLaunch.forEach(data => {
           if(select.value =="Sva lansiranja")
           {launch_list.append(LaunchList())}

          if(select.value.includes(data.launch_year))
          {
          nizGodina.push(data)
          
      } 
   });
   nizGodina.forEach(data =>
      {
       launch_list.appendChild(Launch(data))})
})
      