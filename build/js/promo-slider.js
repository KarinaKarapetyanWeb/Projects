var slideIndex=1;function currentSlide(e){showSlides(slideIndex=e)}function showSlides(e){var l,s=document.getElementsByClassName("promo-slider__list-item"),d=document.getElementsByClassName("promo-slider__toggle");for(e>s.length&&(slideIndex=1),e<1&&(slideIndex=s.length),l=0;l<s.length;l++)s[l].style.display="none";for(l=0;l<d.length;l++)d[l].className=d[l].className.replace(" promo-slider__toggle--active","");s[slideIndex-1].style.display="block",d[slideIndex-1].className+=" promo-slider__toggle--active"}showSlides(slideIndex);