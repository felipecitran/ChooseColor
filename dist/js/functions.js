$(function () {
/*Loader*/
$(document).ready(function(){  
    $("#loader").fadeOut("slow");
});
    var header = $('header');
    var verde = "verde"
    var azul = "azul"
    var vermelho = "vermelho"
    var amarelo = "amarelo"
    
    /*Escolhi o Verde*/
    $('.green').attr("href", "#/green");
    $('.green').click(function () {
        header.removeClass();        
        header.addClass('header-green');
         $('#my-color').attr("href", "#/green");
        $('.box-choose-color').fadeOut('1000');    
    });
    /*Escolhi o Azul*/
    $('.blue').attr("href", "#/blue");
    $('.blue').click(function () {
        header.removeClass();        
        header.addClass('header-blue');
         $('#my-color').attr("href", "#/blue");
        $('.box-choose-color').fadeOut('1000');
    });
/*Escolhi o Vermelho*/
    $('.red').attr("href", "#/red");
    $('.red').click(function () {
        header.removeClass();        
        header.addClass('header-red');
         $('#my-color').attr("href", "#/red");
        $('.box-choose-color').fadeOut('1000');
    });
    /*Escolhi o Amarelo*/
     $('.yellow').attr("href", "#/yellow");
    $('.yellow').click(function () {
        header.removeClass();        
        header.addClass('header-yellow');
         $('#my-color').attr("href", "#/yellow");
        $('.box-choose-color').fadeOut('1000');
    });
    /*Escolhendo outra cor*/
    $('.new-color').click(function () {  
        $('.box-choose-color').show();
   
    });
});
/*Vai para o topo*/
$(function(){
  $(".up").click(function (event) {
    event.preventDefault();   
    var deslocamento = $('#header').offset().top;
    $('html, body').animate({ scrollTop: deslocamento }, 'slow');
  });
  
  new WOW().init();  

});

