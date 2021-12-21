document.getElementById("hero").addEventListener("mousemove", event => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    gsap.set(".cursor", {
        x: mouseX,
        y: mouseY, 
    })

    gsap.to(".shape", {
        x: mouseX,
        y: mouseY,
        stagger: -0.1
    })
});


// mobile menu slide from the left
$('[data-toggle="slide-collapse"]').on('click', function() {
    $navMenuCont = $($(this).data('target'));
    $navMenuCont.animate({'width':'toggle'}, 350);
});