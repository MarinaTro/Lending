/**
 * Created by akharitonov on 13.04.2016.
 */
function initialize() {
    var latlng = new google.maps.LatLng(55.747003, 37.689101);
    var settings = {
        zoom: 17,
        center: latlng,
        scrollwheel: false,
        mapTypeControl: true,
        mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
        navigationControl: true,
        navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [
                    {
                        "saturation": "-64"
                    },
                    {
                        "lightness": "-15"   //31
                    },
                    {
                        "gamma": "1.65"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "lightness": "10"  //18
                    },
                    {
                        "saturation": "-7"
                    },
                    {
                        "gamma": "1.52"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "hue": "#ff0045"
                    },
                    {
                        "saturation": "3"
                    },
                    {
                        "lightness": "1"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#2f173f"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "-58"
                    },
                    {
                        "lightness": "15" //3
                    },
                    {
                        "hue": "#b800ff"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#46bcec"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            }
        ]
    };

    var map = new google.maps.Map(document.getElementById("map"),
        settings);

    var companyLogo = new google.maps.MarkerImage(
        'img/map_icon.png',
        new google.maps.Size(47, 57),
        new google.maps.Point(0,0),
        new google.maps.Point(20,65)
    );

    var companyPos = new google.maps.LatLng(55.747003, 37.689101);

    var companyMarker = new google.maps.Marker({
        position: companyPos,
        map: map,
        icon: companyLogo,
        title:"г. Москва, Шоссе Энтузиастов, дом 2"
    });
/*
    var contentString = '<div id="content">'+
        '<span>длвпаофвалдофв</span>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    companyMarker.addListener('mouseover', function() {
        infowindow.open(map, companyMarker);
    });
    companyMarker.addListener('mouseout', function() {
        infowindow.close(map, companyMarker);
    });*/
}

/*слайдер на странице О компании, монтаж рекламных конструкций
function slider_installation_constructions(){

    var screen_width = $(window).width();

    $('.direction_box_wrap .direction_box span').on('click',function(){
        $('.direction_box_wrap .direction_box span').removeClass('show');
        var active_class = $(this).attr('class');
        console.log(active_class);
        $(this).addClass('show');

        $('.installation_constructions_wrap .slider > div.active').css('left',-screen_width);
        $('.installation_constructions_wrap .slider > div.' + active_class).css({'display':'block','left':0}).addClass('active');
    });
}
*/

$(document).ready(function(){

    //слайдер в хедере
    var slide_width = $('header .slider_wrap .slider .slide').width();
    var slide_number = $('header .slider_wrap .slider .slide').length;
    var slide_arr = [];
    $('header .slider_wrap .slider .slide').each(function(){
        slide_arr.push($(this).attr('class'));
    });

    var position_elem = [];
    for(var i = 0; i < slide_arr.length; i++){
        var left_position = slide_width*i;
        position_elem.push(left_position);
    }

    var count = 0;
    $('header .slider_wrap .slider .slide').each(function(){
        $(this).css('left',position_elem[count]);
        count += 1;
    });

    $('header .slider_wrap .slider .slide').first().addClass('show');
    $('header .slider_wrap .slider .slide').last().prev().css('left',-slide_width*2);
    $('header .slider_wrap .slider .slide').last().css('left',-(slide_width));

    $('header .slider_wrap .slider i.fa-angle-right').click(function(){
        $('header .slider_wrap .slider .slide').each(function(){
            var x = $(this).position();
            var y= x.left;
            $(this).animate({'left':y-slide_width},500);
        });
        function z(){
            $('header .slider_wrap .slider .slide').each(function() {
                var x2 = $(this).position();
                var y2 = x2.left;
            });
            $('.slider_wrap').removeClass('disabled');
        }
        $('.slider_wrap').addClass('disabled');
        setTimeout(z,550);

        function g() {
            $('header .slider_wrap .slider .slide').each(function() {
                var c = $(this);
                var w = c.position();
                if(w.left == -slide_width*3){
                    $(this).css('left',slide_width*(slide_number-3) + 'px')
                }
            });
            $('.slider_wrap').removeClass('disabled');
        }
        $('.slider_wrap').addClass('disabled');
        setTimeout(g,600);


        if($('header .slider_wrap .slider .slide').last().hasClass('show')){
            $('header .slider_wrap .slider .slide').removeClass('show').first().addClass('show');
        }else{
            $('header .slider_wrap .slider .slide.show').removeClass('show').next().addClass('show');
        }
    });

    $('header .slider_wrap .slider i.fa-angle-left').click(function(){
        $('header .slider_wrap .slider .slide').each(function(){
            var x = $(this).position();
            var y= x.left;
            $(this).animate({'left':y+slide_width},500);
        });
        function z(){
            $('header .slider_wrap .slider .slide').each(function() {
                var x2 = $(this).position();
                var y2 = x2.left;
            });
        }
        setTimeout(z,550);

        function g() {
            $('header .slider_wrap .slider .slide').each(function() {
                var c = $(this);
                var w = c.position();
                if(w.left == slide_width*(slide_number-2)){
                    $(this).css('left',-(slide_width*2) + 'px')
                }
            });
        }
        setTimeout(g,600);


        if($('header .slider_wrap .slider .slide').first().hasClass('show')){
            $('header .slider_wrap .slider .slide').removeClass('show').last().addClass('show');
        }else{
            $('header .slider_wrap .slider .slide.show').removeClass('show').prev().addClass('show');
        }
    });


    //галерея на главной странице
    //$("a.gallery").fancybox();

    //галерея на странице О компании
    //$("a.gallery_licenses_permits").fancybox();

    /*слайдер с партнерами
    $(".carousel").jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev",
        visible: 6
    })*/

    /*подгружаем Гугл карты
    var map = $('#map');
    if (map.length != 0) {
        initialize();
    }*/

    /*маски для телефонов
    $('#services_phone').mask('+9 (999) 999-99-99');
    $('#contact_phone').mask('+9 (999) 999-99-99');*/

    /*выравниваем по центру уголок на странице Услуги и цены, блок с иконками
    $('.cost_services_wrap .cost_services_body .info_services ul li').on('click',function(){
        $('.cost_services_wrap .cost_services_body .info_services ul li').removeClass('active');

        var active_width = $(this).addClass('active').width();
        var active_span_width = $(this).addClass('active').children('span').width();
        $(this).addClass('active').children('span').css('left',active_width/2-active_span_width/2);

        var active_id = $(this).addClass('active').attr('id');

        $('.cost_services_wrap .cost_services_body .content_wrap > div').hide();
        $('.cost_services_wrap .cost_services_body .content_wrap > div.' + active_id).show();
    })

    $('.cost_services_wrap .cost_services_body .info_services ul li a').click(function(e){
        e.preventDefault();
    })
*/
    //закрашиваем таблички при наведении на главной странице портфолио
    /*$('.portfolio_wrap .portfolio .portfolio_order li a').hover(function(e){
        $(this).children('.portfolio_name_wrap').animate({'height':'100%'},500);
    },function(){
        $(this).children('.portfolio_name_wrap').animate({'height':'65px'},500)/*.stop(false,true)*/;
    })

    //закрашиваем таблички при наведении на главной странице портфолио
   /* $('.portfolio_wrap .portfolio .portfolio_order li a').hover(function(){
        //$(this).css('z-index','1');
        $(this).children('.portfolio_name_wrap').animate({'height':'100%'},500);
    },function(){
        var this_elem = $(this);
        this_elem.css('z-index','1');

        function full_bg_portfolio(){
            this_elem.css('z-index', '3');
        }

        $(this).children('.portfolio_name_wrap').animate({'height':'65px'},500);
        setTimeout(full_bg_portfolio,1000);
    });

    //закрашиваем таблички при наведении на главной странице готовые объекты
    $('.ready_objects_wrap .ready_objects .ready_objects_order li a').hover(function(){
        //$(this).css('z-index','1');
        $(this).children('.ready_objects_name_wrap').animate({'height':'100%'},500);
    },function(){
        var this_elem = $(this);
        this_elem.css('z-index','1');

        function full_bg_ready_objects(){
            this_elem.css('z-index', '3');
        }

        $(this).children('.ready_objects_name_wrap').animate({'height':'65px'},500);
        setTimeout(full_bg_ready_objects,1000);
    });

    slider_installation_constructions();

});

window.onload = function(){

    //выравниваем по центру уголок на странице Услуги и цены, блок с иконками при загрузке страницы
    if($('.cost_services_wrap .cost_services_body .info_services ul li.active').length != 0){
        var active_width = $('.cost_services_wrap .cost_services_body .info_services ul li.active').width();
        var active_span_width = $('.cost_services_wrap .cost_services_body .info_services ul li.active').children('span').width();
        $('.cost_services_wrap .cost_services_body .info_services ul li.active').children('span').css('left',active_width/2-active_span_width/2);
    }
}

window.resize= function(){

    slider_installation_constructions();
}*/