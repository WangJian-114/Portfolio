//Codigo JavaScript

(function(){
    // ejecutar JS en modo estricto
    "use strict";
    console.log('Codigo Javascript funciona correctamente');

    document.addEventListener('DOMContentLoaded',function(){

        let errorN = document.getElementById("errorNombre");
        let errorE = document.getElementById("errorEmail");
        let nombre = document.getElementById("nombre");
        let email  = document.getElementById("email");
        let enviar = document.getElementById("enviar");
        nombre.addEventListener('blur',validar);
        email.addEventListener('blur',validarMail);
        enviar.addEventListener('click',enviarDatos);

        // Funciones
        function validar(){
            if(this.value ==''){
                errorN.style.display="block";
                errorN.innerHTML="Este campo es obligatorio";
                this.style.border = '2px solid red';
                errorN.style.border = '2px solid red';
            }else {
                errorN.style.display="none";
                this.style.border = '1px solid #cccccc';
            }
        };

        function validarMail(){
            //indexOf verifica si existe el valor en el texto, sino existe devuelve -1
            if(this.value.indexOf("@")>-1){
                errorE.style.display="none";
                this.style.border = '1px solid #cccccc';
            }else{
                errorE.style.display="block";
                errorE.innerHTML="Debe tener un @ ";
                this.style.border = '2px solid red';
                errorE.style.border = '2px solid red';

            }

        }

        function enviarDatos(event){
            event.preventDefault();
            if(nombre.value ==='' || email.value.indexOf("@")>-1){
                alert('debes completar los campos obligatorio');
                nombre.focus();
                email.focus();
            }else {
                alert('Gracias por contactarme');
            }
        }

    }); //DOM load end


})();






// Codigo jQuery

$(function(){
    'use strict';
    console.log('JQuery funciona correctamente');
    $('.mi-tecnologia div:first').show();
    $('.iconos a:first').addClass('activo');
    $('.iconos a').on('click', mostrarTab);

    function mostrarTab(){
        $('.iconos a').removeClass('activo');
        $(this).addClass('activo');
        var enlace = $(this).attr('href');
        console.log(enlace);
        $('.mi-tecnologia div').hide();
        $(enlace).show();
        return false;  
    }
    /*
    $('#enviar').on('click',aviso);
    function aviso(){
        alert ('Gracias por contactarme!');
        console.log("esta funcionando")
        
    }*/

    // mobile menus
    $('.enlace img').on('click',function(){
        $('.submenu').slideToggle();
    });
    
});