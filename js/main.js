/* 

Vanilla Template

https://templatemo.com/tm-526-vanilla

*/

jQuery(document).ready(function($) {

	'use strict';

    var top_header = $('.parallax-content');
    top_header.css({'background-position':'center center'}); // better use CSS

    $(window).scroll(function () {
    var st = $(this).scrollTop();
    top_header.css({'background-position':'center calc(50% + '+(st*.5)+'px)'});
    });


    $('body').scrollspy({ 
        target: '.fixed-side-navbar',
        offset: 200
    });
      
      // smoothscroll on sidenav click

    $('.tabgroup > div').hide();
        $('.tabgroup > div:first-of-type').show();
        $('.tabs a').click(function(e){
          e.preventDefault();
            var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();
      
    })

    $("#files").change(function() {
        var selectedfilename = $('#files').val()
        $.getJSON( "../data/report.json", function(jsondata) {
            $('#errors').pagination('hide')
            $('.limiter1 tbody').empty()
            table_det = "<table class='lightbox-err'><tr><th style='font-weight: bold'>Serial Number</th><th style='font-weight: bold'>Git Commmit SHA</th></tr>";
            for (var row_num=0; row_num<jsondata.results.length; row_num++){
                var commit_table = "";
                var filename = jsondata.results[row_num].filename;
                if (selectedfilename == 'all') {
                    $('#errors').pagination('show')
                    window.location.reload(true)
                    return
                }
                if (filename == selectedfilename || selectedfilename == 'all') {
                    for(var failure_num=0; failure_num<jsondata.results[row_num].failure_list.length; failure_num++){
                        var errorType = jsondata.results[row_num].failure_list[failure_num].type;
                        var errorMessage = jsondata.results[row_num].failure_list[failure_num].message;
                        var commitIDs = jsondata.results[row_num].failure_list[failure_num].commits;
                    }

                    $('.limiter1 tbody').append('<tr class="row100"><td class="column100 column1" data-column="column1">' + filename +
                    '</td><td class="column100 column2" data-column="column2">' + errorType +
                    '</td><td class="column100 column3" data-column="column3">' + errorMessage +
                    '</td><td class="column100 column4" data-column="column4"><a href="#" data-featherlight="#commit-details-' + row_num + '">' + commitIDs.length +
                    '</a></td></tr>');
                    var commit_table = "";
                    for(var commitID_row_index=0; commitID_row_index<commitIDs.length; commitID_row_index++){
                        commit_table = commit_table.concat('<tr><td>' + (commitID_row_index+1) + '</td><td>' + commitIDs[commitID_row_index] + '</td></tr>');
                    }
                    
                    $('#lightbox-det').append('<div id="commit-details-' + row_num +'"> '+ table_det + commit_table + '</table></div>');
                }        
            }
        })           
    })

    var owl = $("#owl-testimonials");

      owl.owlCarousel({
        
        pagination : true,
        paginationNumbers: false,
        autoPlay: 6000, //Set AutoPlay to 3 seconds
        items : 3, //10 items above 1000px browser width
        itemsDesktop : [1000,3], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,2], // betweem 900px and 601px
        itemsTablet: [600,1], //2 items between 600 and 0
        itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
        
    });

});
