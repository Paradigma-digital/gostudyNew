// New Page

document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        let offsetPosition,
            topOffset;
        if (document.querySelector('header')) {
            topOffset = document.querySelector('header').offsetHeight;
            offsetPosition = elementPosition - topOffset;
        } else {
            offsetPosition = elementPosition;
        }
        
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});


if (window.innerWidth < 768) {
    let btn = document.querySelectorAll('.btn-course')
    if (btn) {
        btn.forEach(item => {
            item.textContent = 'Зарегистрироваться'
        })
    }
}

$(document).ready(function(){	
	// Inputmask.extendDefinitions({
	// //   'C': {
	// // 	validator: "[А-Яа-я\-\ ]"
	// //   },
	//   'N': {
	// 	validator: "[А-Яа-я\-\ ]"
	//   }
	// });
	//$('.inputmask-name').inputmask("a{+}\ {0,1}a{*}\ {0,1}a{*}");
	$('.inputmask-name').inputmask("");
	$('.inputmask-city').inputmask("C{+}");
	$('.inputmask-class').inputmask("{1,3}");
	//$('.inputmask-date').inputmask("datetime", { jitMasking: true });
	$('.inputmask-tel').inputmask("+9 (999) 999-99-99");
	$('.inputmask-email').inputmask("email");
});

$(document).ready(function(){
	$('input').focusout(function(){
		if($(this).val() != ''){
				$(this).next().css("opacity","0");
				$(this).next().css("color","#9FA6BB");
			} else {
				$(this).next().css("opacity","1");
			}
		;
	});
});

// Form label
function inputLabelOpacity() {
    const inputs = document.querySelectorAll('input')
    inputs.forEach(item => {
        item.addEventListener('input', (e)=> {
            if (e.target.value != '') {
                e.target.nextElementSibling.style.opacity = 0
            } else {
                e.target.nextElementSibling.style.opacity = 1
            }
            
        })
    })
}
inputLabelOpacity()


