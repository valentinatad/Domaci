// import { nizLaunch } from "./launch";

let SelectList = () => {
    let select = document.createElement('select');
    let data = new Date();
    for(let i = 2006; i<`${data.getFullYear()}`; i++)
    { let option = document.createElement('option');
      option.innerHTML = i;
      
    //   option.addEventListener('click', (element) => {
    //       if(select.value == element.innerHTML)
    //       {LaunchList(element)}
      
      select.appendChild(option) 
      select.id = "select"
    }
    
    return select
}
// let select = document.querySelector("#select")
// let launch_list = document.querySelector('#launch_list')
// select.addEventListener('change', () => {
//   launch_list.innerHTML = '';
//   nizLaunch.forEach(element => {
//     let nizGodina = [];
//        if(!select.value == element.launch_year)
//        {
//        nizGodina.push(element.launch_year)
//        console.log(nizGodina)
//     //    console.log(LaunchList(element.launch_year))
//    } })

// })

export {SelectList};
    

