window.addEventListener('DOMContentLoaded' , () => {

    // Slider
    const swiper = new Swiper('.slider-1', {

        simulateTouch: false,
        loop: true,
        speed: 500,
        initialSlide: 3,



        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }

    });



        //Accordion
        const accIcons = document.querySelectorAll('.accordion-icon'), 
              subs = document.querySelectorAll('.accordion__subtitle'),
              titles = document.querySelectorAll('.accordion-title')
    
              for(let i = 0; i < accIcons.length; i++){
                accIcons[i].addEventListener('click' , function() {
                    subs.forEach((sub , j) => {
                        if (i !== j) {
                            sub.classList.remove("_active")
                          }
                    })
                    titles.forEach((title , j) => {
                        if (i !== j) {
                            title.classList.remove("_active")
                          }
                    })
                    accIcons.forEach((icon , j) => {
                        if (i !== j) {
                            icon.classList.remove("_active")
                          }
                    })
                    accIcons[i].classList.toggle('_active');
                    subs[i].classList.toggle('_active');
                    titles[i].classList.toggle('_active');
                })
              }


        // Menu 
        const menu = document.querySelector('.menu__icon'),
              body = document.querySelector('body')
              nav = document.querySelector('.nav');

        menu.addEventListener('click' , function() {
            body.classList.toggle('lock')
            menu.classList.toggle('_active');
            nav.classList.toggle('_active');
        })
    
})