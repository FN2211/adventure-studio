window.onload = function(){
    document.getElementById("loading").style.visibility = "visible";
    setTimeout(7380)
    document.getElementById("loading").style.visibility = "collapse";
}

gsap.fromTo(
    '.loading-page',
    {opacity: 1 },
    {
        opacity:0,
        duration: 1.5,
        delay: 6
    }
);

gsap.fromTo(
    'header',
    {opacity: 0 },
    {
        opacity:1,
        duration: 1.5,
        delay: 6
    }
);

gsap.fromTo(
    '.home',
    {opacity: 0 },
    {
        opacity:1,
        duration: 1.5,
        delay: 6
    }
);
gsap.fromTo(
    '.about',
    {opacity: 0 },
    {
        opacity:1,
        duration: 1.5,
        delay: 6
    }
);
gsap.fromTo(
    '.products',
    {opacity: 0 },
    {
        opacity:1,
        duration: 1.5,
        delay: 6
    }
);
gsap.fromTo(
    '.team',
    {opacity: 0 },
    {
        opacity:1,
        duration: 1.5,
        delay: 6
    }
);
gsap.fromTo(
    '.icons-container',
    {opacity: 0 },
    {
        opacity:1,
        duration: 1.5,
        delay: 6
    }
);

gsap.fromTo(
    '.loading-logo-name',
    { opacity: 0,
      y:50

    },{
        y: 0,
        opacity:1,
        duration: 2,
        delay: 0.5
    }
);

