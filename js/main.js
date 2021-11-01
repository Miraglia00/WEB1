$(document).ready(() => {
    if(localStorage.getItem('contr') === null) {
        localStorage.setItem('contr', false)
    }

    const setContrast = (bool) => {
        const contrcss = $("<link>").attr("href", "./css/contr.css").attr("rel","stylesheet").attr("id", "contrcss")
        if(bool) {
            contrcss.insertAfter($('#css'))
        }else{
            $('#contrcss').remove()
 
        }
    }

    var modal = null
    $('#modal_holder').load('./modal.html', () => {
        modal = new bootstrap.Modal($('#feedback_modal'), { backdrop: true })
    })
    $('#mobile_maps').load('./mobile-maps.html')
    $('#tablet_maps').load('./tablet-maps.html')
    
    const dom_modal = $('#feedback_modal')
    let toggled_side = false;
    let toggled_bot = false;
    const nav = $('#sidebar')
    const headnav = $('#headbar')
    const botnav = $('#botnav')

    dom_modal.remove()

    $('#toggle_small_nav').click(() => {
        if (!toggled_side) {
            $('*.nav_info').css('display', 'block')
            $('#toggle_icon').removeClass('bi-arrow-bar-right').addClass('bi-arrow-bar-left')
        } else {
            $('*.nav_info').css('display', 'none')
            $('#toggle_icon').removeClass('bi-arrow-bar-left').addClass('bi-arrow-bar-right')
        }
        toggled_side = !toggled_side
    })

    $('#toggle_bottom_nav').click(() => {
        if (!toggled_bot) {
            $('#toggle_content').removeClass('hidden')
            $('#bot_open_modal').removeClass('hidden')
            $('#toggle_icon').removeClass('bi-arrow-bar-left').addClass('bi-arrow-bar-right')
        } else {
            $('#toggle_content').addClass('hidden')
            $('#bot_open_modal').addClass('hidden')
            $('#toggle_icon').removeClass('bi-arrow-bar-right').addClass('bi-arrow-bar-left')
        }
        toggled_bot = !toggled_bot
    })

    $('.up').click(() => {
        window.scrollTo(0, 0);
    })

    $('#contr').click(() => {
        const val = localStorage.getItem('contr')
        const updated = (val === 'true') ? false : true
        console.log(updated)
        localStorage.setItem('contr', updated)
        setContrast(updated)
    })
    let hidden = false
    $('#ism').click(() => {
        if(!hidden){
            $('.hide-cont').addClass('hide')
            hidden = !hidden
            $('#ism').html('Ismétlődő elemek BE')
        }else{
            $('.hide-cont').removeClass('hide')
            hidden = !hidden
            $('#ism').html('Ismétlődő elemek KI')
        }
        
    })

    $(window).scroll(() => {
        if ($(window).scrollTop() >= 400) {
            $('.up').removeClass('hidden')
        } else {
            $('.up').addClass('hidden')
        }


        if (window.innerWidth >= 1600 || $(headnav).hasClass('insta-hide')) {
            if ($(window).scrollTop() >= 500 && !$(headnav).hasClass('insta-hide') || ($(headnav).hasClass('insta-hide') && $(window).scrollTop() >= 100 && window.innerWidth >= 990)) {
                nav.css('display', 'block')
                headnav.css('display', 'none')
                botnav.removeClass('hidden')
            } else {
                nav.css('display', 'none')
                headnav.css('display', 'block')
                botnav.addClass('hidden')
            }
        }
    })

    $('#toggle_nav_index').click(() => {
        new bootstrap.Collapse($('#navbarIndex'))
    })

    $('.open_modal_btn').click(() => {
        dom_modal.insertAfter($('body'))
        modal.show()
    })

    $(document).on('click', '#close_modal_btn', () => {
        dom_modal.remove()
    })

    if(localStorage.getItem('contr') === 'true'){
        setContrast(true)
    }
})