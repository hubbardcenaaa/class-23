$('#test').on('click',function(){
    alert();
})




// $(selector).action() //jquery syntax



$(function(){
    $('#showBtn').on('click', function(){
        $('#element').show(5000);
    });

    $('#hideBtn').on('click', function(){
        $('#element').hide(5000);
    })

    
    $('#toggleBtn').on('click', function(){
        $('#element').toggle('slow');
    })

})



$(function(){
    $('#slideUp').on('click', function(){
        $('#element').slideUp(2000);
    });

    $('#slideDown').on('click', function(){
        $('#element').slideDown(2000);
    })

    
    $('#slideToggle').on('click', function(){
        $('#element').slideToggle('slow');
    })

})


$(function(){
    $('#fadeIn').on('click', function(){
        $('#element').fadeIn(2000);
    });

    $('#fadeOut').on('click', function(){
        $('#element').fadeOut(2000);
    })

    
    $('#fadeToggle').on('click', function(){
        $('#element').fadeToggle('slow');
    })
     
    $('#fadeTo').on('click', function(){
        $('#element').fadeTo(2000, 0.3).hide(1000).show(1000).slideUp(1000).slideDown(1000).fadeTo(2000,0.8);
    })

})



$(function(){
    $('#animateBtn').on('click',function(){
        $('#element').animate({
            width: '500px',
            height: '500px',

        },5000)
    });
    $('#stopBtn').on('click', function(){
        $('#element').stop();
    });

    $('#animateAtn').on('click',function(){
        $('#element').toggleClass('active');
    });


    $('#chaining').on('click',function(){
        $('#element').css('background','green').slideUp(1000).slideDown(1000).hide(1000);
    })

    $('#showText').on('click',function(){
        alert('Text: '+ $('#lorem').text());
    });



    $(window).on('load', function(){
        $('#preloader').hide();
    })
})









