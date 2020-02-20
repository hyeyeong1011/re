$(function(){    
    
    $('#fullpage').fullpage({
        autoScrolling:true,
        scrollHorizontally: true,
        navigation: true,
        loopBottom: true,
        sectionsColor: ['#eedcd5', '#eedcd5', '#eedcd5'],
        anchors: ['first', 'second', 'third'],
        'afterLoad': function(anchorLink, index){
            
            if(index == 2){

                $(".skill-item:nth-child(1)").addClass('flip-bottom-1');
                $(".skill-item:nth-child(2)").addClass('flip-bottom-2');
                $(".skill-item:nth-child(3)").addClass('flip-bottom-3');
                $(".skill-more").addClass('flip-bottom-4');

            }else if(index != 2){

                $(".skill-item:nth-child(1)").removeClass('flip-bottom-1');
                $(".skill-item:nth-child(2)").removeClass('flip-bottom-2');
                $(".skill-item:nth-child(3)").removeClass('flip-bottom-3');
                $(".skill-more").removeClass('flip-bottom-4');

            }

        },
    });



});
