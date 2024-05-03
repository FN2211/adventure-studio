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
