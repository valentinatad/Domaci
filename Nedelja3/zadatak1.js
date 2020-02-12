function maxBroj(x,y,z){
    if(x > y && x > z)
{
    return x;
}
   else if(y > x && y > z)
   {
       return y;
   }
   else(z > x && z> y )
   {
       return z;
   }
}
console.log(maxBroj(4,7,8));