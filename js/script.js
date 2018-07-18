(function() {

    new TypeIt('.typing-animation-effect', {
        strings: ['I build for the web', 'Learning is a never ending process', 'I am a developer in progress'],
        breakLines: false,
        loop: true
    });

    navbar();
    $(window).resize(navbar);

    $(document).scroll(function() {
        if ($(window).width() >= 991) {  
            const toggle = $(this).scrollTop() >= $('#home').height() - $('.navbar').innerHeight();
            $('.navbar').toggleClass('bg-dark', toggle);
            $('.navbar-brand').toggleClass('hide-brand', !toggle);
            $('.navbar-nav').toggleClass('mr-auto', !toggle);
        }
    });

    function navbar() {
        if ($(window).width() <= 991) {
            $('.navbar').addClass('bg-dark');
            $('.navbar-brand').removeClass('hide-brand');
            $('.navbar-nav').removeClass('mr-auto');
        }
        else {
            $('.navbar').removeClass('bg-dark');
            $('.navbar-brand').addClass('hide-brand');
            $('.navbar-nav').addClass('mr-auto');
        }
    }

    $('a[href*="#"]').click(function() {
        const href = $.attr(this, 'href');
    
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 1000, function () {
            window.location.hash = href;
        });
    
        return false;
    });
      
})();
