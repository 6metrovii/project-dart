document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tabs-item"),
          modalWindow = document.querySelector('.popup'),
          btnWhite = document.querySelector('.promo-btn-white'),
          btnBlack =document.querySelector('.promo-btn-black'),
          closeModal = document.querySelector('#close'),
          video = document.querySelector('.video'),
          play = document.querySelector('.promo-play'),
          signBtn = document.querySelector('.promo-sign'),
          regWindow = document.querySelector('.reg-window'),
          reg = document.querySelector('.reg'),
          regCloseBtn = document.querySelector('#close-reg'),
          regForm = document.querySelector('.reg-form');
    
    if(localStorage.getItem('reg') === "register"){
        regactive();
    }
    signBtn.addEventListener('click', () => { 
        regWindow.classList.add('reg-active');
        regWindow.classList.remove('reg-close');
        reg.classList.remove('hidden');
        document.body.style.overflow = "hidden";
    });
    function regClose(){
        regWindow.classList.remove('reg-active'); 
        regWindow.classList.add('reg-close');
        setTimeout(() => {reg.classList.add('hidden');}, 400);
        document.body.style.overflow = ""
    }
    function regactive(){
        signBtn.innerHTML = 'hello user!';
        signBtn.style.backgroundColor = 'white';
        signBtn.style.color = 'black';
    }
    regForm.addEventListener('submit', (e)=> { 
        regClose();
        regForm.reset();
        localStorage.setItem('reg', "register");
        if(localStorage.getItem('reg') === "register"){
            regactive();
        }
    });
    
    reg.addEventListener('click', (e) => {
        const target = e.target 
        if(target == reg ){
            regClose();
        }
    })
    regCloseBtn.addEventListener('click', () => {regClose();});
    
    play.addEventListener('click', () => {video.play(); play.style.display = "none"; });
    
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
