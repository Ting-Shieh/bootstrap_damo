$(document).ready(function(){

    // init isotope => images part
    var $grid = $('.work-projects').isotope({

    });
    
    // filter items on button click
    $('.work-btn-group').on("click", 'button', function(){
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({filter: filterValue});
    });
    // layout isotope after each image loads
    $grid.imagesLoaded().progress(function(){
        $grid.isotope('layout');
    });

});