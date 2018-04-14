(function() {
    const typewriterAnimationEffect = document.querySelector('.typing-animation-effect');

    var typewriter = new Typewriter(typewriterAnimationEffect, {
        loop: true
    });
    
    typewriter
        .typeString('Developer')
        .pauseFor(2500)
        .deleteAll()
        .start();

})();