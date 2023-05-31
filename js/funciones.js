function validar() {
   if ($('#txt1').val().length == 0) {
     alert('Ingrese rut');
     return false;
   }
 }

 function limpiar()
{
    document.getElementById("txt1").value='';
    document.getElementById("txt2").value='';
}
function encriptar(){

    var encriptado = document.getElementById("txt1").value;
    
    let arr = encriptado.split('');
    console.log(arr); 
    var i=0;
    var concatena="";
    while(i < encriptado.length) {
    	if(arr[i] =="a")
    	{
           // alert("ai");
            concatena=concatena+"ai";
    		
    	}
         else if(arr[i] =="e"){
           // alert("enter");
            concatena=concatena+"enter";
         }
         else if(arr[i] =="i"){
            //alert("imes");
            concatena=concatena+"imes";
         }
         else if(arr[i] =="o"){
           // alert("ober");
            concatena=concatena+"ober";
         }
         else if(arr[i] =="u"){
            //alert("ufat");
            concatena=concatena+"ufat";
         }
         else{
            //alert(arr[i]);
            concatena=concatena+arr[i];
         }
        i++;
        document.getElementById("txt2").value= concatena;
       
    }

}

function desencriptar(){

var desencriptado = document.getElementById("txt1").value;
var concatena = desencriptado.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
document.getElementById("txt2").value = concatena;
    
}


function copyToClipboard(){
    let textoCopiar = document.getElementById("txt2"); //se obtine el id del elemento
    textoCopiar.select(); //selecciona todo el texto en un elemento
    document.execCommand("copy"); //usamos el metodo copiar 
    window.getSelection().removeAllRanges(); //se deselecciona el elemento
    alert("Copiado al portapapeles");
  }
