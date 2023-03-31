
// function modals(){

// const open = document.getElementById('open');
// const close = document.getElementById('close');
// const modal = document.getElementById('modal');


// open.addEventListener("click", function () {

//    modal.classList.add("active");
//    document.body.classList.add("lock");
// });

// close.addEventListener("click", function () {

//     modal.classList.remove("active");
//     document.body.classList.remove("lock");
//  });

//  window.addEventListener('click', e =>
//  e.target == modal ? document.body.classList.remove('lock') : false
// );

// window.addEventListener('click', e =>
//  e.target == modal ? modal.classList.remove('active') : false
// );

 
// };

// modals();


function addClass(element, className) {
   element.classList.add(className);
 }
 
 function removeClass(element, className) {
   element.classList.remove(className);
 }
 
 function showModal() {
   const modal = document.querySelector(MODAL_SELECTOR);
   const body = document.body;
 
   addClass(modal, 'active');
   addClass(body, 'lock');
 }
 
 function hideModal() {
   const modal = document.querySelector(MODAL_SELECTOR);
   const body = document.body;
 
   removeClass(modal, 'active');
   removeClass(body, 'lock');
 }
 
 function handleModalClick(e) {
   if (e.target.matches(MODAL_SELECTOR) || e.target.matches(CLOSE_SELECTOR)) {
     hideModal();
   }
 }
 
 function initModal() {
   const openBtn = document.querySelector(OPEN_SELECTOR);
   const closeBtn = document.querySelector(CLOSE_SELECTOR);
   const modal = document.querySelector(MODAL_SELECTOR);
 
   if (openBtn && closeBtn && modal) {
     openBtn.addEventListener('click', showModal);
     closeBtn.addEventListener('click', hideModal);
     modal.addEventListener('click', handleModalClick);
   }
 }
 
 // Константы для идентификации элементов
 const OPEN_SELECTOR = '#open';
 const CLOSE_SELECTOR = '#close';
 const MODAL_SELECTOR = '#modal';
 
 initModal();
 
 
 







