function casiPalindrome(palabra){
    var tam=palabra.length;
    var palindrome;
    var count=0;
    
    for(var i=0,j=tam-1;i<(tam/2),j>(tam/2);i++,j++)
    {
        if(palabra[i] != palabra[j])
        {
            count += 1;
        }
    }
    if(count<=2)
    {
        palindrome = true;
    }
    else
    {
        palindrome = false;
    }
    return palindrome;
}