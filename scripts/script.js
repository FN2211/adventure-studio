window.onload = function(){
    document.getElementById("loading").style.visibility = "visible";
    setTimeout(() => {
        document.getElementById("loading").style.visibility = "collapse";
    }, "8000");
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

const AdventureInfoModal = document.getElementById("AdventureModal");
const openAdventureInfoModal = document.getElementById("AdventureModalOpen");
const closeAdventureInfoModal = document.getElementById("AdventureModalClose");

openAdventureInfoModal.addEventListener('click', () => {
    AdventureInfoModal.show();
})

closeAdventureInfoModal.addEventListener('click', () => {
    AdventureInfoModal.close();
})

const Adventure2InfoModal = document.getElementById("Adventure2Modal");
const openAdventure2InfoModal = document.getElementById("Adventure2ModalOpen");
const closeAdventure2InfoModal = document.getElementById("Adventure2ModalClose");

openAdventure2InfoModal.addEventListener('click', () => {
    Adventure2InfoModal.show();
})

closeAdventure2InfoModal.addEventListener('click', () => {
    Adventure2InfoModal.close();
})
