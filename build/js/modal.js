for(var modalButton=document.querySelectorAll(".modal-open__btn"),modalClose=document.querySelector(".modal-close"),modal=document.querySelector(".modal"),modalOverlay=document.querySelector(".modal-overlay"),i=0;i<modalButton.length;i++)modalButton[i].addEventListener("click",function(e){e.preventDefault(),modalOverlay.classList.add("overlay-show"),modal.classList.add("modal-show")});modalOverlay.addEventListener("click",function(e){e.preventDefault(),modalOverlay.classList.remove("overlay-show"),modal.classList.remove("modal-show")}),modalClose.addEventListener("click",function(e){e.preventDefault(),modalOverlay.classList.remove("overlay-show"),modal.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),modal.classList.remove("modal-show"),modalOverlay.classList.remove("overlay-show"))});