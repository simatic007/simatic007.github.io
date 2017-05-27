/**
 * Created by simatic on 12.04.17.
 */

$(function(){
    $('.carousel').carousel({
        interval: 500000
    });
    /*
    $(function(){       
        $('#form').validator();        
    });*/
    new WOW().init();
});
window.onload = function() { // после загрузки страницы

    var scrollUp = document.getElementById('scrollup'); // найти элемент

    scrollUp.onmouseover = function() { // добавить прозрачность
        scrollUp.style.opacity=0.3;
        scrollUp.style.filter  = 'alpha(opacity=30)';
    };

    scrollUp.onmouseout = function() { //убрать прозрачность
        scrollUp.style.opacity = 0.5;
        scrollUp.style.filter  = 'alpha(opacity=50)';
    };

    scrollUp.onclick = function() { //обработка клика
        window.scrollTo(0,0);
    };

// show button

    window.onscroll = function () { // при скролле показывать и прятать блок
        if ( window.pageYOffset > 550 ) {
            scrollUp.style.display = 'block';
        } else {
            scrollUp.style.display = 'none';
        }
    };
};