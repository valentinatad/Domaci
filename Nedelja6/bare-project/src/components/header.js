import {getHeader} from '../services/spacex_service'
const header = (data) => {
    let{name,
    founder} = data;
    console.log(name);
    console.log(founder);

}
export const getHeaderComplite = () => {
    const div2 = document.createElement('div');
    div2.className = "header";
    getHeader().then(response => {
        let {data} = response;
        let p = document.createElement('p')
        header(name);
        p.innerHTML = `<span>${data.name}</span><br><span>${data.founder}<span>`
        div2.appendChild(p);
        });
     return div2}