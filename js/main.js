$(document).ready(() => {
    var modal = new bootstrap.Modal($('#feedback_modal'), { backdrop: true })
    var dom_modal = $('#feedback_modal')
    var toggled = false;
    var nav = $('#sidebar')
    var headnav = $('#headbar')

    dom_modal.remove()

    $('#toggle_small_nav').click(() => {
        if (!toggled) {
            $('*#nav_info').css('display', 'block')
            $('#toggle_icon').removeClass('bi-arrow-bar-right').addClass('bi-arrow-bar-left')
        } else {
            $('*#nav_info').css('display', 'none')
            $('#toggle_icon').removeClass('bi-arrow-bar-left').addClass('bi-arrow-bar-right')
        }
        toggled = !toggled
    })

    $(window).scroll(() => {
        if ($(window).scrollTop() >= 600) {
            $('.down').addClass('hidden')
        } else {
            $('.down').removeClass('hidden')
        }


        if (window.innerWidth >= 1600) {
            if ($(window).scrollTop() >= 500) {
                nav.css('display', 'block')
                headnav.css('display', 'none')
            } else {
                nav.css('display', 'none')
                headnav.css('display', 'block')
            }
        }
    })

    $('.open_modal_btn').click(() => {
        dom_modal.insertAfter($('body'))
        modal.show()
    })

    $(document).on('click', '#close_modal_btn', () => {
        dom_modal.remove()
    })
})