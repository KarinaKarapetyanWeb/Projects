var prevBtnDoc=document.querySelector(".slider-doc-btn--left"),nextBtnDoc=document.querySelector(".slider-doc-btn--right"),sliderDoc=document.querySelector(".documentation-slider__list"),sliderItemsDoc=document.querySelectorAll(".documentation-slider__item"),counterDoc=0;if(1200<=window.innerWidth)var numberDoc=4,sizeDoc=260;else if(768<=window.innerWidth)numberDoc=2,sizeDoc=260;else numberDoc=1,sizeDoc=260;function sliderRightDoc(){counterDoc++,sliderDoc.style.transform="translateX("+-sizeDoc*counterDoc+"px)",0<counterDoc&&prevBtnDoc.classList.remove("disabled"),counterDoc<=0&&(prevBtnDoc.classList.add("disabled"),sliderDoc.style.transform="none"),counterDoc>=sliderItemsDoc.length-numberDoc&&(nextBtnDoc.classList.add("disabled"),counterDoc=sliderItemsDoc.length-numberDoc,sliderDoc.style.transform="translateX("+-sizeDoc*counterDoc+"px)")}function sliderLeftDoc(){counterDoc--,sliderDoc.style.transform="translateX("+-sizeDoc*counterDoc+"px)",0<counterDoc<sliderItemsDoc.length-2&&(nextBtnDoc.classList.remove("disabled"),sliderDoc.style.transform="translateX("+-sizeDoc*counterDoc+"px)"),counterDoc<=0&&(prevBtnDoc.classList.add("disabled"),sliderDoc.style.transform="none")}nextBtnDoc.addEventListener("click",sliderRightDoc),prevBtnDoc.addEventListener("click",sliderLeftDoc);