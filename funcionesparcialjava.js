function precio(){
    var compra= document.getElementById("articulos").value
    var cantidad= document.getElementById("ncant").value
    cantidad =parseInt(cantidad)
    var resultado
    resultado= parseInt(resultado)
    if (isNaN(cantidad)){
        alert("debe ingresar numeros")
    }
    if(compra == "1"){
        resultado = 10000
    }
    if(compra == "2"){
        resultado = 15000
    }
    if (compra=="3"){
        resultado = 20000
    }
    resultado = resultado * cantidad
    var marca = document.getElementById("marca").value
    if (marca == "apple"){
        resultado = resultado*4
    }
    if(marca=="samsung"){
        resultado = resultado*2
    }
    if (marca=="nokia"){
        resultado= resultado/2
    }
    var militar = document.getElementById("militar").checked;
    var empleado = document.getElementById("empleado").checked;
    var contado = document.getElementById("contado").checked
    if(militar||empleado||contado){
        resultado=resultado-(resultado*0.2)
    }
    
    document.getElementById("resultado").innerHTML ="El resultado es: " + resultado;
}




function resetear(){
    document.getElementById("articulos").value=" ";
    document.getElementById("ncant").value =" "
    document.getElementById("resultado").innerHTML =" " ;
    document.getElementById("marca").value=" ";
    document.getElementById("militar").value="";
    document.getElementById("empleado").value="";
    document.getElementById("contado").value="";
}