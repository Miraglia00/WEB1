$(document).ready(() => {


    var toggled = false;
    var nav = $('#sidebar')

    $('#toggle_small_nav').click(() => {
        if(!toggled) {
            $('*#nav_info').css('display', 'block')
            $('#toggle_icon').removeClass('bi-arrow-bar-right').addClass('bi-arrow-bar-left')
        }else {
            $('*#nav_info').css('display', 'none')
            $('#toggle_icon').removeClass('bi-arrow-bar-left').addClass('bi-arrow-bar-right')
        }
        toggled = !toggled
    })

    $(window).scroll(() => {
        if($(window).scrollTop() >= 600){
            console.log($(window).scrollTop())
            $('.down').addClass('hidden')
        }else{
            $('.down').removeClass('hidden')
        }


        if(window.innerWidth >= 1600){
            if($(window).scrollTop() >= 500) {
                nav.css('display', 'block')
            }else{
                nav.css('display', 'none')
            }
        }
        

    })

})