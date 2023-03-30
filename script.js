
var bu=document.getElementById("btn");
function p(){
    var n=parseInt( document.getElementById("k").value );
    var sn= parseInt( document.getElementById("l").value);
var op=document.getElementById('m').value;
var ch=document.getElementById('h') ;
    if(op=="+"){
        ch.innerText=n+"  +  "+sn+'  = '+parseInt(n+sn);
    }
    if(op=="-"){
        ch.innerText=n+"  - "+sn+'  =  '+parseInt(n-sn);
    }
    if(op=="*" || op=="x"){
        ch.innerText=n+'  x  '+sn+'  =  '+parseInt(n*sn);
    }
    if(op=="/"){
        ch.innerText=n+'  /  '+sn+'  =  '+parseFloat(n/sn);
    }
}
p();