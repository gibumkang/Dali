(() => {
    //Position absolute to sticky header on index
    const nav = document.getElementById("home-nav");
    document.addEventListener("scroll", () => {
        //
    });
})();

(() => {
    //Full-Width Swiper
    const fullWidthSwiper = new Swiper("#full-swiper-container", {
        effect: "fade",
        // Optional parameters
        direction: "horizontal",
        loop: true,
        autoplay: {
            /* remove/comment to stop autoplay  */ delay: 4000,
        },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        // And if we need scrollbar
        scrollbar: {
            el: ".swiper-scrollbar",
        },
    });

    //Full-Width Swiper
    const featuredSwiper = new Swiper("#featured-swiper-container", {
        effect: "fade",
        // Optional parameters
        direction: "horizontal",
        loop: true,
        autoplay: {
            /* remove/comment to stop autoplay  */ delay: 2500,
        },

        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
        },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        // And if we need scrollbar
        scrollbar: {
            el: ".swiper-scrollbar",
        },
    });
})();
