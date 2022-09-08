const navSlide = () => {
    const burger = document.querySelector('.fa-bars');
    const nav = document.querySelector('.screen-nav');
    const navLinks = document.querySelectorAll('.screen-nav li');
    const body = document.querySelector('body');

    burger.addEventListener('click', () => {
        nav.animate(
            {
                right: "0px"

            },
            200
        );

        // try to change animation nav-bar and visible 
    })
}

navSlide();