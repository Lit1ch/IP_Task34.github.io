$(window).on('load', function(){
    initMobileMenu();
});

$(window).on('scroll', function() {
    toggleScrollUpButton();
});

function toggleScrollUpButton() {
    var TOP_OFFSET = 400;
    if ($(window).scrollTop() > $(window).height() - TOP_OFFSET) {
        $('#scrollUpArrow').addClass('visible');
    } else {
        $('#scrollUpArrow').removeClass('visible');
    }
}

function initMobileMenu() {
    $('#menuButton').on('click', function() {
        $('#menuButton').toggleClass('active');
        $('#menuContainer').toggleClass('active');
    });
}

$('#scrollUpArrow').on('click', function() {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
});

$(document).ready(function() {
    $('.separation_wrapper .success_button').on('click', function() {
        $('.overlay').addClass('visible');
        $('.popup_wrapper').addClass('visible');
    });

    $('.close_button').on('click', function() {
        closePopup();
    });

    $('.overlay').on('click', function(event) {
        if (event.target === this) {
            closePopup();
        }
    });

    function closePopup() {
        $('.overlay').removeClass('visible');
        $('.popup_wrapper').removeClass('visible');
        clearErrors();
    }

    var $emailInput = $('.popup_input_field');
    var $errorMessage = $('.popup_error_message');
    var $popupSubmitBtn = $('.popup_success_button');

    $popupSubmitBtn.on('click', function(e) {
        e.preventDefault(); 
        
        if ($emailInput.val().trim() === '') {
            $emailInput.addClass('error');
            $errorMessage.addClass('visible');
        } else {
            clearErrors();
        }
    });

    $emailInput.on('click focus input', function() {
        clearErrors();
    });

    function clearErrors() {
        $emailInput.removeClass('error');
        $errorMessage.removeClass('visible');
    }

    $('.menu_link').on('click', function(event) {
        event.preventDefault();

        var targetId = $(this).attr('href');

        var targetElement = $(targetId);

        if (targetElement.length) {
            $('html, body').animate({
                scrollTop: targetElement.offset().top
            }, 800);
        }
    });
});