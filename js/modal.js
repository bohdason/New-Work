
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


function modals() {
  const modal = document.getElementById('modal');
  const body = document.body;
  const openBtn = document.getElementById('open');
  const closeBtn = document.getElementById('close');

  
  function openModal() {
    modal.classList.add("active");
    body.classList.add("lock");
  }
  function closeModal() {
    modal.classList.remove("active");
    body.classList.remove("lock");
  }
  body.addEventListener('click', function (event) {
    const target = event.target;

    if (target === openBtn) {
      openModal();
    }
    if (target === closeBtn || target === modal) {
      closeModal();
    }
  });
  document.querySelectorAll('.close-btn').forEach(function(element) {
    element.addEventListener('click', function() {
      closeModal();
    });
  });
}

modals();



 







