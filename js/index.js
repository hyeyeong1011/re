$(function(){    
    
    $('#fullpage').fullpage({
        autoScrolling:true,
        scrollHorizontally: true,
        navigation: true,
        loopBottom: true,
        sectionsColor: ['#eedcd5', '#eedcd5', '#eedcd5', '#eedcd5', '#eedcd5'],
        anchors: ['first', 'second', 'third', 'fourth', 'last'],
        'afterLoad': function(anchorLink, index){
            
            if(index == 1){

                $(".skill-item:nth-child(1)").removeClass('tilt-in-top-1');
                $(".skill-item:nth-child(2)").removeClass('tilt-in-top-2');
                $(".skill-item:nth-child(3)").removeClass('tilt-in-top-3');
                $(".skill-more").removeClass('tilt-in-top-4');

            }else if(index == 2){

                $(".skill-item:nth-child(1)").addClass('tilt-in-top-1');
                $(".skill-item:nth-child(2)").addClass('tilt-in-top-2');
                $(".skill-item:nth-child(3)").addClass('tilt-in-top-3');
                $(".skill-more").addClass('tilt-in-top-4');

            }else if(index == 3){

                $(".skill-item:nth-child(1)").removeClass('tilt-in-top-1');
                $(".skill-item:nth-child(2)").removeClass('tilt-in-top-2');
                $(".skill-item:nth-child(3)").removeClass('tilt-in-top-3');
                $(".skill-more").removeClass('tilt-in-top-4');

            }else if(index == 4){

                $(".skill-item:nth-child(1)").removeClass('tilt-in-top-1');
                $(".skill-item:nth-child(2)").removeClass('tilt-in-top-2');
                $(".skill-item:nth-child(3)").removeClass('tilt-in-top-3');
                $(".skill-more").removeClass('tilt-in-top-4');

            }else{



            }

        },
    });


    // 아이콘 깜박거리기
    function blink(){
        $('.box i').delay(100).fadeTo(100,0.5).delay(100).fadeTo(100,1, blink);
    }

    $(document).ready(function() {
        blink();
    });

});
