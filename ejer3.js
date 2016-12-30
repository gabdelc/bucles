function factorial(n) {
    var factorial = 1;
    if(n <= 0){
        return null;
      }else{
         for(var i=1; i<=n; i++){
        factorial = factorial*i ;
        }
         return factorial;
    }
   
}