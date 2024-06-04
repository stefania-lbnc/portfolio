$(window).scroll(function(){
    if($(document).scrollTop() > 200){//Here 200 may be not be exactly 200px
        $('.buttons-inline').hide();
    }
});