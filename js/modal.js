
function modals(){

const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');


open.addEventListener("click", function () {

   modal.classList.add("active");
});

close.addEventListener("click", function () {

    modal.classList.remove("active");
 });
 
};

modals();








