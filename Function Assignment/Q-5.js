function fectorial (fac) {
   if(fac==0)
   {
    return 1;
   }
   return fac*fectorial(fac-1);
}


let fac;
fac = fectorial(6);
console.log(fac);