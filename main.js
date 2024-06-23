var data = "" ;
var cod = ['C++' , 'JAVA' , 'Python' ] ;
for(var i = 0; i <= 2; i++){
    
    data+="<ul>" + cod[i] + "</ul>" ;
}

document.querySelector("ul").innerHTML = data;