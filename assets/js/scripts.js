(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        $(".hero-area").owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: false,
            autoplay: true,
        });


        //For Offsite Canvas
        $(".menu").click(function() {
            $(".menu-show").css('right', '0px').addClass('animated fadeIn');
            $(this).hide();
        });
        $(".menu-cross ").click(function() {
            $(".menu-show").css('right', '-300px').removeClass('animated fadeIn');
            $('.menu').show();
        });

        // validate contact form
        $(function() {
            $('#contact').validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true
                    },
                    phone: {
                        required: true
                    },
                    answer: {
                        required: true,
                        answercheck: true
                    }
                },
                messages: {
                    name: {
                        required: "Please enter your name",
                        minlength: "your name must consist of at least 2 characters"
                    },
                    email: {
                        required: "Please enter your name",
                    },
                    phone: {
                        required: "Please enter your phone",
                    },
                    message: {
                        required: "Please enter your message",
                    },
                    answer: {
                        required: "Please Give Right Answer"
                    }
                },
                submitHandler: function(form) {
                    $(form).ajaxSubmit({
                        type:"POST",
                        data: $(form).serialize(),
                        url:"process.php",
                        success: function() {
                            $('#contact :input').attr('disabled', 'disabled');
                            $('#contact').fadeTo( "slow", 0.15, function() {
                                $(this).find(':input').attr('disabled', 'disabled');
                                $(this).find('label').css('cursor','default');
                                $('#success').fadeIn();
                            });
                        },
                        error: function() {
                            $('#contact').fadeTo( "slow", 0.15, function() {
                                $('#error').fadeIn();
                            });
                        }
                    });
                }
            });
        });
        new WOW().init();
    });

    jQuery(window).load(function() {


    });


}(jQuery));