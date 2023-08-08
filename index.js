
// CONFUGURE SWIPER JS
let swiper = new Swiper(".mySwiper", {
  slidesPerView: window.innerWidth < 750 ? "1" : "2",
  centeredSlides: true,
  spaceBetween: window.innerWidth < 750 ? 0 : 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// QUOTE SLIDER 
let quote_swiper = new Swiper(".quote-swiper", {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// SWIPE TO CENTER SLIDE 
swiper.slideTo(1, false, false);

// GET SWIPER BUTTONS FROM DOCUMENT
const back_swipe = document.querySelector("#back-swipe");
const forward_swipe = document.querySelector("#forward-swipe");

// ADD EVENTS LISTERS TO A CLICK
back_swipe.addEventListener("click", () => {
  swiper.slideTo(swiper.activeIndex - 1, false, false)
});
forward_swipe.addEventListener("click", () => {
  swiper.slideTo(swiper.activeIndex + 1, false, false)
});


// MODAL WINDOW
// GET BUTTON ELEMENT 
const reserve_button = document.querySelector("#reserve_button");
// GET MODAL WINDOW ELLEMENT
const modal_window = document.querySelector(".modal_window");

const close_window = document.querySelector(".close_modal_window_btn");

reserve_button.addEventListener("click",() => {

  modal_window.classList.remove("hide")
})

close_window.addEventListener("click",() => {
  modal_window.classList.add("hide");
})


// FORM AJAX REQUEST

document.forms["form"].onsubmit = function Submit(event) {
  try{
    // event.preventDefault();
    let name = document.forms["form"]["name"].value;
    let telephone = document.forms["form"]["tel"].value;
    let person_count = document.forms["form"]["person_count"].value;
    

    const request = new XMLHttpRequest();

    request.onload = () => {
      if(request.status === 200) {
        console.log("SUCCESS");
      }
    };

    const uri_params = "name=" + encodeURIComponent(name) + 
                       "&telephone=" + encodeURIComponent(telephone) +
                       "&person_count=" + encodeURIComponent(person_count);
  
    request.open("GET","/submit?" + uri_params,true);
    
    // SENDING THE REQUEST
    request.send();

  }catch(ex) {
    console.log(ex);
  }

}
