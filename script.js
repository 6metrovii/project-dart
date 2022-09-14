document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tabs-item"),
          modal = document.querySelector('.popup-wrap'),
          modalWindow = document.querySelector('.popup'),
          btnWhite = document.querySelector('.promo-btn-white'),
          btnBlack =document.querySelector('.promo-btn-black'),
          closeModal = document.querySelector('#close'),
          video = document.querySelector('.video'),
          play = document.querySelector('.promo-play');
    
    play.addEventListener('click', () => {video.play(); play.style.display = "none"; })
    
    tabs.forEach(elem => {
        elem.addEventListener("click", () => {
            tabs.forEach(otherItem => {
                if (otherItem.classList.contains("tabs-item-active")) {
                    otherItem.classList.remove("tabs-item-active");
                }
            })
            elem.classList.add("tabs-item-active")
        });
    });
    
    $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow:'<div class="arrow prev-arrow"> <i class="fa-solid fa-chevron-left"></i> </div>',
    nextArrow:'<div class="arrow next-arrow "> <i class="fa-solid fa-chevron-right"></i></div>'
    });
    
    function modalOpen() {
        modalWindow.classList.add('popup-active');
        document.body.style.overflow = "hidden";
    }
    
    function modalClose() {
        modalWindow.classList.remove('popup-active');
        document.body.style.overflow = "";
    }

    btnWhite.addEventListener('click', () =>{modalOpen();});
    
    btnBlack.addEventListener('click', () => {modalOpen();});
    
    closeModal.addEventListener('click', () => {modalClose();});
    
    modalWindow.addEventListener('click', (e) => {
        const target = e.target 
        if(target == modalWindow ){
            modalClose();
        }
    })
    
    $("a[href*='#']").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
        return false;
    });
});
