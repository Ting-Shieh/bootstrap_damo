
// Initializing all
$(document).ready(function(){
    let navheight = $('.navbar').height();  //抓　navbar　高度
    // Initializing ripples
    $('#header,.info').ripples({
        resolution: 400,
        dropRadius: 20,
        perturbance: 0.04,
        
    });

    //sticky navbar less padding
    $(window).scroll(function(){
        let position = $(this).scrollTop();
        if(position >= 718){
            $('.navbar').addClass('navbar-background');
            $('.navbar').addClass('fixed-top');
        }
        else{
            $('.navbar').removeClass('navbar-background');
            $('.navbar').removeClass('fixed-top');
        }
    });


     //sticky #back-to-top less padding
     $(window).scroll(function(){
        let position = $(this).scrollTop();
        if(position >= 718){
            $('#back-to-top').addClass('scrollTop');

        }
        else{
            $('#back-to-top').removeClass('scrollTop');

        }
    });

    //smooth scroll
    $('.nav-item a, .header-link, #back-to-top').click(function(link){
        link.preventDefault();
        let target = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top - navheight
        },3000);
    });

    // Initializing popup
    // https://dimsemenov.com/plugins/magnific-popup/
    //From a group of elements with one parent
    $('.parent-container').magnificPopup({
        delegate: 'a',
        type:'image',
        gallery: {
            enabled: true
        },
    });

    // navbar button 
    $('.navbar-toggler').click(function(){
        $('.navbar-toggler').toggleClass('change')
    });
});


