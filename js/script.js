$(function () {
    $(document).scroll(function(){
        var $nav = $(".navbar");
        if($(this).scrollTop() > $nav.height()){
            $nav.addClass("scrolled");
        }
        else{
            $nav.removeClass("scrolled");
        }
    });
});

