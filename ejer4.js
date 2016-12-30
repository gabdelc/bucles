function stringMultiplicar(n){
    var salida="";
    var multiplicacion=0;
    
    for(var i=1;i<=10;i++)
    {
        multiplicacion=n*i;
        salida += n+"x"+i+"="+multiplicacion;
        
        if(i<10)
        {
            salida += "/";
        }
    }
    return salida;
}