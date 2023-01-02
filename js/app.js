const progress = document.querySelectorAll('.progress-status');

progress.forEach((index) => {
    let = percentage = index.getAttribute('data-percentage')
    index.innerHTML = '<span style="width: '+percentage+'%">'+percentage+'%</span>'    
});

const headline_button = document.getElementById('headline-button');
headline_button.addEventListener('click', () => {
    let scrollDiv = document.getElementById("about").offsetTop;
    window.scrollTo({
        top: scrollDiv,
        behavior: 'smooth'
    });
});

jQuery(function($) {
    $('#nav-action').click(function(e) {
        $(this).toggleClass('active');
        let nav = $('.summary ul');

        if ($(this).hasClass('active')) {
            $(this).html('<i class="fa-solid fa-xmark"></i>');

            nav.slideDown(200);
        } else {
            $(this).html('<i class="fa-solid fa-bars"></i>');

            nav.slideUp(200);
        }
    });

    $('.summary .nav-item').click(function(e) {
        e.preventDefault();

        let target = $(this).data('target');
        let scrollDiv = document.getElementById(target).offsetTop;

        window.scrollTo({
            top: scrollDiv,
            behavior: 'smooth'
        });
    });

    $(document).ready(function(){
        $(".carousel-portfolio").owlCarousel({
            loop: true,
            center: true,
            lazyLoad: true,
            items: 1,
            margin: 0,
            autoplay: true,
            dots:true,
            nav:true,
            responsive: {
            0: {
                items: 1,
                dots: false
            },
            768: {
                items: 2,
            },
            1170: {
                items: 2,
                nav: false
            }
            }
        });
    });
});