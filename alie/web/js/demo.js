/*======== DEMO PANLE JS ===========*/
$(document).ready(function(){

    var retrivedUrl = localStorage.getItem('themeUrl');
    $("#theme-switcher").attr("href", retrivedUrl);

    $("span.color_1").on("click", function(){
        $("#theme-switcher").attr("href", "css/style.css");
        localStorage.setItem('themeUrl', 'css/style.css');
    });
    $("span.color_2").on("click", function(){
        $("#theme-switcher").attr("href", "css/style-green.css");
        localStorage.setItem('themeUrl', 'css/style-green.css');
    });
    $("span.color_3").on("click", function(){
        $("#theme-switcher").attr("href", "css/style-red.css");
        localStorage.setItem('themeUrl', 'css/style-red.css');
    });
    $("span.color_4").on("click", function(){
        $("#theme-switcher").attr("href", "css/style-orange.css");
        localStorage.setItem('themeUrl', 'css/style-orange.css');
    });
    $("span.color_5").on("click", function(){
        $("#theme-switcher").attr("href", "css/style-yellow.css");
        localStorage.setItem('themeUrl', 'css/style-yellow.css');
    });
    $("span.color_6").on("click", function(){
        $("#theme-switcher").attr("href", "css/style-brown.css");
        localStorage.setItem('themeUrl', 'css/style-brown.css');
    });
    $("span.color_7").on("click", function(){
        $("#theme-switcher").attr("href", "css/style-hunter-green.css");
        localStorage.setItem('themeUrl', 'css/style-hunter-green.css');
    });
    $("span.color_8").on("click", function(){
        $("#theme-switcher").attr("href", "css/style-green-bright.css");
        localStorage.setItem('themeUrl', 'css/style-green-bright.css');
    });
    $("span.color_9").on("click", function(){
        $("#theme-switcher").attr("href", "css/style-violet.css");
        localStorage.setItem('themeUrl', 'css/style-violet.css');
    });
    $("span.color_10").on("click", function(){
        $("#theme-switcher").attr("href", "css/style-red-dark.css");
        localStorage.setItem('themeUrl', 'css/style-red-dark.css');
    });


    $(".spiner_button").on("click", function(event){
        event.preventDefault();
        if ( $(this).hasClass("slide_in_out") ) {
        $(".demo_panel_box").stop().animate({left:"-180px"}, 400);
        } else {
        $(".demo_panel_box").stop().animate({left:"0px"}, 400);
        }
        $(this).toggleClass("slide_in_out");
        return false;
    });
});    