import {LaunchList} from "./components/launch_list";
import {getHeaderComplite} from "./components/header"
import { SelectList } from "./components/select";

const app=document.querySelector('#app');

// const header=Header()
const header=document.createElement('header');
const filters=document.createElement('section');

const launch_list=LaunchList();

const footer=document.createElement('footer');

app.append(header,filters,launch_list,footer);
header.appendChild(getHeaderComplite());
filters.appendChild(SelectList());
