var navEquip=document.querySelector(".equipment-nav__wrapper"),navMain=document.querySelector(".main-nav"),navEquipToggle=document.querySelector(".equipment-nav__toggle");navEquipToggle.addEventListener("click",function(){navEquip.classList.contains("equipment-nav__wrapper--closed")?(navEquip.classList.remove("equipment-nav__wrapper--closed"),navEquip.classList.add("equipment-nav__wrapper--opened"),navEquipToggle.classList.remove("equipment-nav__toggle--open"),navEquipToggle.classList.add("equipment-nav__toggle--close")):(navEquip.classList.add("equipment-nav__wrapper--closed"),navEquip.classList.remove("equipment-nav__wrapper--opened"),navEquipToggle.classList.remove("equipment-nav__toggle--close"),navEquipToggle.classList.add("equipment-nav__toggle--open")),navMain.classList.contains("main-nav--opened")&&(navMain.classList.add("main-nav--closed"),navMain.classList.remove("main-nav--opened"),navEquip.classList.remove("equipment-nav__wrapper--closed"),navEquip.classList.add("equipment-nav__wrapper--opened"),navEquipToggle.classList.remove("equipment-nav__toggle--open"),navEquipToggle.classList.add("equipment-nav__toggle--close"))});