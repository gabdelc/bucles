function casiPalindrome(palabra) {
    var longitud = palabra.length;
    var palindrome;
    var conta = 0;
    
    for( var i=0, j=longitud-1 ; i<=(longitud/2), j>=(longitud/2) ; i++, j-- ) {
        if ( palabra[i] != palabra[j] ) {
            conta+=1;
        }
    }
        if (conta<=2) {
            palindrome = true;
        } else {
            palindrome = false;
        }
        return palindrome;      
}
