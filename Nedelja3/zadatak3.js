function odredjujeDeljivSa5(arr) {

    for(let index = 0; index < arr.length; index++)
    { let element = arr[index];
        if(element % 5 == 0)
        {console.log(element)}

    }
}   
let a = [1,2,5,20,80,100];

odredjujeDeljivSa5(a);