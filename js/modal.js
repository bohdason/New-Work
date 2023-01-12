
function modals(){

const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');


open.addEventListener("click", function () {

   modal.classList.add("active");
   document.body.classList.add("lock");
});

close.addEventListener("click", function () {

    modal.classList.remove("active");
    document.body.classList.remove("lock");
 });

 window.addEventListener('click', e =>
  e.target == modal ? modal.classList.remove('active') : false
);

 
};

modals();








