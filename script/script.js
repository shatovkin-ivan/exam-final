window.addEventListener('DOMContentLoaded', () => {

   // появляющаяся кнопка

   window.addEventListener('scroll', () => {
      const arrow = document.querySelector('.arrow__top'),
         banner = document.querySelector('.luxury'),
         header = document.querySelector('.header'),
         height = banner.offsetHeight + header.offsetHeight;

      function scroll() {
         if (window.pageYOffset > height) {
            arrow.classList.add('arrow__top_active');
         }
         else {
            arrow.classList.remove('arrow__top_active');
         }
      }

      scroll();
   })

   // dropdownHeader

   const headerDrop = document.querySelector('.header__dropdown_item'),
      headerLink = document.querySelector('.header__link'),
      arrow = document.querySelector('.arrow');

   headerLink.addEventListener('click', (e) => {
      e.preventDefault();
      headerDrop.classList.toggle('header__dropdown_active');
      arrow.classList.toggle('arrow_active');
   })

   // dropdownFilter

   const sortDrop = document.querySelector('.sort__dropdown_item'),
      sortLink = document.querySelector('.sort__dropdown_link');

   sortLink.addEventListener('click', (e) => {
      e.preventDefault();
      sortDrop.classList.toggle('sort__dropdown_active');
   })

   // модальное окно

   const modal = document.querySelector('.button__order'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.modal__close');

   modal.addEventListener('click', () => {
      overlay.classList.add('modal__show');
      overlay.classList.remove('modal__hide');
   });
   close.addEventListener('click', () => {
      overlay.classList.add('modal__hide');
      overlay.classList.remove('modal__show');
	})
	
	// удаление введенного в формах текста 

	const form = document.querySelectorAll('.modal__input');

	form.forEach(item => {
		item.lastElementChild.addEventListener('click', () => {
			item.firstElementChild.value = "";
		})
	})

	// валидация форм

	const buttonSubmit = document.querySelector('.button_modal'),
	checkbox = document.querySelector('.checkbox_modal input'),
	checkmark = document.querySelector('.checkbox__wrap_modal'),
	password = document.querySelector('.modal__password'),
	confirmPassword = document.querySelector('.modal__password_confirm'),
	error = document.querySelector('.modal__error');
	
	buttonSubmit.addEventListener('click', function() {
		
			if(checkbox.checked == false) {
				checkmark.classList.add('error');
			}
			else {
				checkmark.classList.remove('error');
				form.forEach(item => {
					if(item.firstElementChild.value == "") {
						item.querySelector('.modal__alarm').classList.add('modal__alarm_active');
					}
					else {
						item.querySelector('.modal__alarm').classList.remove('modal__alarm_active');
						if(password.value != confirmPassword.value) {
							error.classList.add('modal__error_active');
							confirmPassword.value = '';	
						}
						else {
							error.classList.remove('modal__error_active');
						}
					}
				})
			}
		})
	})



$(document).ready(function () {

	$('.mask-phone').mask('+7 (999) 999-99-99');

   const listItem = $('.header__dropdown_item a');

   $(listItem).on('click', function (event) {
      event.preventDefault();
		$('.header__dropdown_text').text($(this).text());
      $('.header__dropdown_item').removeClass('header__dropdown_active');
      $('.arrow').removeClass('arrow_active');
   });

   const sortItem = $('.sort__dropdown_item a')
   $(sortItem).on('click', function (event) {
		event.preventDefault();
		$('.sort__dropdown_text').text($(this).text());
      $('.sort__dropdown_item').removeClass('sort__dropdown_active');
      $('.arrow').removeClass('arrow_active');
   });

   $('.filter__descr').on('click', function (event) {
      event.preventDefault();
      if ($(window).width() > 1024) {
         $(this).parents('.filter__item').find('.filter__dropdown').slideToggle();
      }
      $(this).parents('.filter__item').find('.arrow').toggleClass('arrow_active');
      $(this).parents('.filter__item').find('.filter__subtitle').toggleClass('filter__subtitle_active')
   });


   $('.filter__descr_main').on('click', function (event) {
      event.preventDefault();
      $(this).parents('.filter').find('.filter__dropdown_main').slideToggle();
   });

   $('.filter__descr').on('click', function (event) {
      event.preventDefault();
      if ($(window).width() < 1024) {
         $(this).parents('.filter__item').find('.filter__dropdown').slideToggle();
      }
   });

   // скролл

   $('a.anchor').click(function (e) {
      if ($(window).width() > 768) {
         e.preventDefault();
         var elClick = $(this).attr('href');
         var dest = $(elClick).offset().top;
         $('html:not(:animated),body:not(:animated)').animate({ scrollTop: dest }, 1000);
      }
	});
})
