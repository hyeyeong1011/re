$(function(){    
    
    $('#fullpage').fullpage({
        autoScrolling:true,
        scrollHorizontally: true,
        navigation: true,
        loopBottom: true,
    });


    // 아이콘 깜박거리기
    function blink(){
        $('.box i').delay(100).fadeTo(100,0.5).delay(100).fadeTo(100,1, blink);
    }

    $(document).ready(function() {
        blink();
    });

});