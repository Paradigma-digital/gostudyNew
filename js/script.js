const   isContainerMargin = document.querySelector('.header .container'),
        overflowSlider = document.querySelectorAll('.overflow-slider'),
        accordion = document.querySelectorAll('.accordion'),
        accordionBtn = document.querySelector('.accordion-show'),
        accordionPanel = document.querySelectorAll('.accordion-panel'),
        mobMenuBtn = document.querySelector('.header-menu-mob'),
        mobMenu = document.querySelector('.header-menu'),
        modalBtn = document.querySelectorAll('.modal-call'),
        modalBody = document.querySelector('.modal'),
        modalClose = modalBody.querySelector('.modal-close');

modalBtn.forEach(i=> {
    i.addEventListener('click', ()=>{
        modalBody.classList.add('show')
    })
})
modalBody.addEventListener('click', (e)=> {
    if (e.target === modalBody || e.target === modalClose) modalBody.classList.remove('show'), modalBody.querySelector('.modal-success').style.display = 'none'
    if (e.target === modalBody.querySelector('.btn')) modalBody.querySelector('.modal-success').style.display = 'flex'
})


document.querySelectorAll('form').forEach(i=> i.addEventListener('submit', (e)=> e.preventDefault()))


if (window.innerWidth > 768) {
    $('.respect-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: false,
        nextArrow: `<svg class="respect-arrow respect-next" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.125 25C3.125 30.8016 5.42968 36.3656 9.53204 40.468C13.6344 44.5703 19.1984 46.875 25 46.875C30.8016 46.875 36.3656 44.5703 40.468 40.468C44.5703 36.3656 46.875 30.8016 46.875 25C46.875 19.1984 44.5703 13.6344 40.468 9.53204C36.3656 5.42968 30.8016 3.125 25 3.125C19.1984 3.125 13.6344 5.42968 9.53204 9.53204C5.42968 13.6344 3.125 19.1984 3.125 25ZM50 25C50 31.6304 47.3661 37.9893 42.6777 42.6777C37.9893 47.3661 31.6304 50 25 50C18.3696 50 12.0107 47.3661 7.32233 42.6777C2.63392 37.9893 0 31.6304 0 25C0 18.3696 2.63392 12.0107 7.32233 7.32233C12.0107 2.63392 18.3696 0 25 0C31.6304 0 37.9893 2.63392 42.6777 7.32233C47.3661 12.0107 50 18.3696 50 25ZM14.0625 23.4375C13.6481 23.4375 13.2507 23.6021 12.9576 23.8951C12.6646 24.1882 12.5 24.5856 12.5 25C12.5 25.4144 12.6646 25.8118 12.9576 26.1049C13.2507 26.3979 13.6481 26.5625 14.0625 26.5625H32.1656L25.4562 33.2687C25.311 33.414 25.1957 33.5865 25.1171 33.7763C25.0385 33.9661 24.998 34.1696 24.998 34.375C24.998 34.5804 25.0385 34.7839 25.1171 34.9737C25.1957 35.1635 25.311 35.336 25.4562 35.4813C25.6015 35.6265 25.774 35.7418 25.9638 35.8204C26.1536 35.899 26.357 35.9395 26.5625 35.9395C26.768 35.9395 26.9714 35.899 27.1612 35.8204C27.351 35.7418 27.5235 35.6265 27.6688 35.4813L37.0438 26.1063C37.1893 25.9611 37.3047 25.7887 37.3835 25.5989C37.4622 25.409 37.5028 25.2055 37.5028 25C37.5028 24.7945 37.4622 24.591 37.3835 24.4011C37.3047 24.2113 37.1893 24.0389 37.0438 23.8937L27.6688 14.5187C27.5235 14.3735 27.351 14.2582 27.1612 14.1796C26.9714 14.101 26.768 14.0605 26.5625 14.0605C26.357 14.0605 26.1536 14.101 25.9638 14.1796C25.774 14.2582 25.6015 14.3735 25.4562 14.5187C25.311 14.664 25.1957 14.8365 25.1171 15.0263C25.0385 15.2161 24.998 15.4195 24.998 15.625C24.998 15.8305 25.0385 16.0339 25.1171 16.2237C25.1957 16.4135 25.311 16.586 25.4562 16.7313L32.1656 23.4375H14.0625Z" fill="#074C80"/>
        </svg>`,
        prevArrow: `<svg class="respect-arrow respect-prev" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.125 25C3.125 30.8016 5.42968 36.3656 9.53204 40.468C13.6344 44.5703 19.1984 46.875 25 46.875C30.8016 46.875 36.3656 44.5703 40.468 40.468C44.5703 36.3656 46.875 30.8016 46.875 25C46.875 19.1984 44.5703 13.6344 40.468 9.53204C36.3656 5.42968 30.8016 3.125 25 3.125C19.1984 3.125 13.6344 5.42968 9.53204 9.53204C5.42968 13.6344 3.125 19.1984 3.125 25ZM50 25C50 31.6304 47.3661 37.9893 42.6777 42.6777C37.9893 47.3661 31.6304 50 25 50C18.3696 50 12.0107 47.3661 7.32233 42.6777C2.63392 37.9893 0 31.6304 0 25C0 18.3696 2.63392 12.0107 7.32233 7.32233C12.0107 2.63392 18.3696 0 25 0C31.6304 0 37.9893 2.63392 42.6777 7.32233C47.3661 12.0107 50 18.3696 50 25ZM14.0625 23.4375C13.6481 23.4375 13.2507 23.6021 12.9576 23.8951C12.6646 24.1882 12.5 24.5856 12.5 25C12.5 25.4144 12.6646 25.8118 12.9576 26.1049C13.2507 26.3979 13.6481 26.5625 14.0625 26.5625H32.1656L25.4562 33.2687C25.311 33.414 25.1957 33.5865 25.1171 33.7763C25.0385 33.9661 24.998 34.1696 24.998 34.375C24.998 34.5804 25.0385 34.7839 25.1171 34.9737C25.1957 35.1635 25.311 35.336 25.4562 35.4813C25.6015 35.6265 25.774 35.7418 25.9638 35.8204C26.1536 35.899 26.357 35.9395 26.5625 35.9395C26.768 35.9395 26.9714 35.899 27.1612 35.8204C27.351 35.7418 27.5235 35.6265 27.6688 35.4813L37.0438 26.1063C37.1893 25.9611 37.3047 25.7887 37.3835 25.5989C37.4622 25.409 37.5028 25.2055 37.5028 25C37.5028 24.7945 37.4622 24.591 37.3835 24.4011C37.3047 24.2113 37.1893 24.0389 37.0438 23.8937L27.6688 14.5187C27.5235 14.3735 27.351 14.2582 27.1612 14.1796C26.9714 14.101 26.768 14.0605 26.5625 14.0605C26.357 14.0605 26.1536 14.101 25.9638 14.1796C25.774 14.2582 25.6015 14.3735 25.4562 14.5187C25.311 14.664 25.1957 14.8365 25.1171 15.0263C25.0385 15.2161 24.998 15.4195 24.998 15.625C24.998 15.8305 25.0385 16.0339 25.1171 16.2237C25.1957 16.4135 25.311 16.586 25.4562 16.7313L32.1656 23.4375H14.0625Z" fill="#074C80"/>
        </svg>`
    });
} else {
    let a = `
        <div class="admission-btn accordion-show accordion-work" style="position:absolute;">
            Читать все 
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.2942 0.705812C11.684 0.316024 12.3181 0.31815 12.7061 0.706116L12.7939 0.793961C13.1839 1.18392 13.1865 1.81355 12.792 2.20803L7.70798 7.29205C7.31697 7.68306 6.68649 7.68653 6.29201 7.29205L1.20798 2.20803C0.816974 1.81702 0.81811 1.18193 1.20607 0.793961L1.29392 0.706116C1.68388 0.31616 2.31277 0.312811 2.70577 0.705812L7 5.00004L11.2942 0.705812Z" fill="#393939"></path>
            </svg>                                
        </div>`
    let b = `<div class="respect-slider-more"> Показать еще </div>`
    let c = `
        <div class="respect-slider-star-social-more">
            <img src="img/icon/soc.svg" class="more-social">
        </div>`
    
    const socialStar = document.querySelectorAll('.respect-slider-star-img')
    socialStar.forEach(i=> {
        i.insertAdjacentHTML('beforeend', c)
        i.addEventListener('click', (e)=> {
            if(e.target.classList.contains('more-social')) {
                
                e.target.closest('.respect-slider-star').querySelector('.respect-slider-star-social').classList.toggle('show')
                
            }
        })
    })
    let desc = document.querySelectorAll('.respect-slider-star-desc')
    desc.forEach(i=> {
        i.classList.add('panel')
        i.insertAdjacentHTML('beforebegin', a)
        
    });

    let btn = document.querySelectorAll('.respect-slider .admission-btn')
    btn.forEach(i=> {
            i.parentElement.style.position = 'relative'
            i.parentElement.style.paddingBottom = 65 + 'px'
    });
    const respectStars = document.querySelectorAll('.respect-slider-star')
    const respectSlider = document.querySelector('.respect-slider')
    respectSlider.insertAdjacentHTML('beforeend', b)
    respectStars.forEach((i, idx)=>{
        if (idx >=3) {
            i.style.maxHeight = 0
            i.style.overflow = 'hidden'
            i.style.margin = 0
        }
        
    })
    let isShow = true
    respectSlider.addEventListener('click', (e)=> {
        
        if (e.target === respectSlider.querySelector('.respect-slider-more')) {
            
            
            
            if (isShow) {
                e.target.style.display = 'none'
                respectStars.forEach((i)=>{
                        i.style.maxHeight = i.scrollHeight + 'px'
                        i.style.overflow = null
                        i.style.margin = null
                        isShow = false
                        setTimeout(function() {
                            i.style.maxHeight = null
                        },500)
                })
            } 
            // else {
            //     e.target.textContent = 'Показать еще'
            //     respectStars.forEach((i, idx)=>{
            //         if (idx >=3) {
            //             i.style.maxHeight = i.scrollHeight + 'px'
                        
                        
            //             i.style.overflow = 'hidden'
                        
            //             i.style.margin = 0
            //             setTimeout(function() {
            //                 i.style.maxHeight = 0 + 'px'
            //             },500)
            //         }
            //         isShow = true
                    
            //     })
            // }
        }
    })
}

mobMenuBtn.addEventListener('click', mobMenuShow);

function mobMenuShow() {
    
    if (!mobMenuBtn.classList.contains('active')) {
        mobMenu.style.maxHeight = mobMenu.scrollHeight + 'px'
        this.classList.toggle('active')
    } else {
        this.classList.toggle('active')
        mobMenu.style.maxHeight = null
    }
    
}
mobMenu.querySelectorAll('.header-menu-item a').forEach( i=> {
        i.addEventListener('click', ()=> {
            if (mobMenuBtn.classList.contains('active')) {
                mobMenu.style.maxHeight = null
                mobMenuBtn.classList.toggle('active')
            }
        })
})

function marginElement(elem, elem2) {
    let a = elem.getBoundingClientRect().left;
    elem2.forEach(i=> {
        i.style.marginLeft = `${a}px`;
        if (a === 0) {
            i.style.marginLeft = `15px`
        }
    });
    
};
marginElement(isContainerMargin, overflowSlider);

window.addEventListener('resize', ()=> {
    marginElement(isContainerMargin, overflowSlider);
})

$('.overflow-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: false,
    variableWidth: true,
    responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});




// Аккардеон
accordion.forEach(item => {
    const accordionShow = item.querySelector('.accordion-show');
    accordionShow.addEventListener('click', (e)=> {
        e.preventDefault()
        accordionShow.classList.toggle('show')
        // Получение всех дочерних элементов
        let accordionChildren = Array.from(accordionShow.closest('.accordion').children)
        accordionChildren.map(i=> {
            if (i.classList.contains('accordion-panel')) {
                if (i.getAttribute('data-show') === 'false') {
                    i.setAttribute('data-show', true)
                    i.classList.toggle('show')
                    i.style.maxHeight = i.scrollHeight + 'px'
                } else {
                    i.setAttribute('data-show', false)
                    i.classList.toggle('show')
                    i.style.maxHeight = 0 + 'px'
                }
            } 
        })
    })
})


//

var acc = document.getElementsByClassName("accordion-work");
var i;
setTimeout(function () {
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
              panel.classList.toggle('show')
          } else {
              panel.classList.toggle('show')
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        });
      }
}, 500)



var input = document.querySelector("#phone");
    window.intlTelInput(input, {
      nationalMode: false,
      onlyCountries: ['UA', 'KZ', 'RU', 'CZ', 'KG'],
    //   placeholderNumberType: "MOBILE",
      preferredCountries: ['UA'],
      separateDialCode: true,
      utilsScript: "mask/js/utils.js",
    });

    var input = document.querySelector("#modal-phone");
    window.intlTelInput(input, {
      nationalMode: false,
      onlyCountries: ['UA', 'KZ', 'RU', 'CZ', 'KG'],
      preferredCountries: ['UA'],
      separateDialCode: true,
      formatOnDisplay: true,
      utilsScript: "mask/js/utils.js, ",
    });


/*Dropdown Menu*/
$('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/


$('.dropdown-menu li').click(function () {
var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
  msg = '<span class="msg">Hidden input value: ';
$('.msg').html(msg + input + '</span>');
}); 




const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}








