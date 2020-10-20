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


    $('#enviar').on('click',aviso);
    function aviso(){
        alert ('Gracias por contactarme!');
        console.log("esta funcionando")
        
    }

});