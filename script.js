let searchFor=document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
    searchFor.classList.toggle("active");
    shoppingcart.classList.remove("active");
    loginForm.classList.remove("active");
    navbar.classList.remove("active");
}
let shoppingcart=document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () => {
    shoppingcart.classList.toggle("active");
    searchFor.classList.remove("active");
    loginForm.classList.remove("active");
    navbar.classList.remove("active");
}
let loginForm=document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
    loginForm.classList.toggle("active");
    searchFor.classList.remove("active");
    shoppingcart.classList.remove("active");
    navbar.classList.remove("active");
    

}
let navbar=document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle("active");
    searchFor.classList.remove("active");
    shoppingcart.classList.remove("active");
    loginForm.classList.remove("active");
}
window.onscroll = () => {
    searchFor.classList.remove("active");
    shoppingcart.classList.remove("active");
    loginForm.classList.remove("active");
    navbar.classList.remove("active");
}

var swiper = new Swiper(".product-slider", {
   loop:false,
    spaceBetween: 10,
    
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView:3,

      },
    },
  });
  var swiper = new Swiper(".review-slider", {
    loop:true,
     spaceBetween: 20,
     autoplay:{
      delay: 5000,
      disableOnInteraction: false,
    },
     
     breakpoints: {
       0: {
         slidesPerView: 1,
       },
       768: {
         slidesPerView: 2,
       },
       1024: {
         slidesPerView:3,
 
       },
     },
   });