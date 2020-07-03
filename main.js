// presentación, aparición del rey 

    function iniciar(){
        document.getElementById("presentacion").style.display ="none";
        document.getElementById("contenedor").style.display ="block";

for (i = 0; i <= 10; i++)
setTimeout("document.getElementById('pieza').style.opacity = '" + (i / 10) + "'", i * 450);
document.getElementById("pieza").style.display ="block"; 
document.getElementById("danubio").play();
document.getElementById("contenedor").style.display ="block";
    
    }
      
    
      // base del movimiento
      window.onload= function(){
           
            document.onkeydown=chars;
      }
      // Las variables de movimientos permiten la continuidad del desplazamiento y 
      // tienen como valor los márgenes iniciales del div
    var movimientoHorizontal=250;
    var movimientoVertical=430;
        function chars (evento){
            if (window.event)
            evento=window.
            caracteres(evento.keyCode);
            
    }

    function caracteres (chars) {
           
    const piezas=["url(../chess/imagenes/peon.png)","url(../chess/imagenes/peon.png)", "url(../chess/imagenes/caballo.png)",
    "url(../chess/imagenes/torre.png)", "url(../chess/imagenes/dama.png)",
    "url(../chess/imagenes/alfil.png)", "url(../chess/imagenes/rey.png)",];   
    
    //var pieza=(piezas[4]);
   
   // movilidad
   document.getElementById("presentacion").style.display ="none";

            if(chars==39) {
                movimientoHorizontal+=10;
                document.getElementById("pieza").style.marginLeft = movimientoHorizontal+"px";
            }
            if(chars==37) {
                movimientoHorizontal+=-10;
                document.getElementById("pieza").style.marginLeft = movimientoHorizontal+"px";
            }
            if(chars==40) {
                movimientoVertical+=10;
                document.getElementById("pieza").style.marginTop = movimientoVertical+"px";
            }
            if(chars==38) {
                movimientoVertical+=-10;
                document.getElementById("pieza").style.marginTop = movimientoVertical+"px";
            }
            
           
            
                // pasar de un lado a otro

        
            
            if (movimientoHorizontal==-80) {
                movimientoHorizontal=490;
                var randomH= Math.abs(parseInt(Math.random()*movimientoHorizontal)%6); 
                document.getElementById("pieza").style.backgroundImage = (piezas[randomH])    
                document.getElementById("pieza").style.height = "60px";
            }

            if (movimientoHorizontal==500) {
                movimientoHorizontal=-70;
                var randomH= Math.abs(parseInt(Math.random()*movimientoHorizontal)%6);
                document.getElementById("pieza").style.backgroundImage = (piezas[randomH]);  
                document.getElementById("pieza").style.height = "60px";  
            }

            if (movimientoVertical==500) {
                movimientoVertical=-50;
                var randomV= Math.abs(parseInt(Math.random()*movimientoVertical)%6);
                document.getElementById("pieza").style.backgroundImage = (piezas[randomV]);
                document.getElementById("pieza").style.height = "60px";
            }

            if (movimientoVertical==-70) {
                movimientoVertical=500;
                var randomV= Math.abs(parseInt(Math.random()*movimientoVertical)%6);
                document.getElementById("pieza").style.backgroundImage = (piezas[randomV]);  
                document.getElementById("pieza").style.height = "60px"; 
        }
        // Encontrando al rey escondido. Se le cambia la altura para poder aplicar el if
            if (movimientoVertical==-60) {
                if (movimientoHorizontal==250) {
                    randomV=6;
                document.getElementById("pieza").style.backgroundImage = (piezas[randomV]); 
                document.getElementById("pieza").style.height = "59px";
                
              
                   } 

                
                
            
            } 
               
          
              // JUEGO GANADO
         

         if (movimientoVertical==430) {
                if (movimientoHorizontal==250) {
                    if (document.getElementById("pieza").clientHeight==59) {
    
                        document.getElementById("contenedor").style.backgroundImage = "url(../chess/imagenes/victoria.png)";
                        document.getElementById("pieza").style.display = "none";
                        document.getElementById("danubio").pause();
                        document.getElementById("aplausos").play();
                        

                    }
                
              
                   } 

                }
        
    }
                    
