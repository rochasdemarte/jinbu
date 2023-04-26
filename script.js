const $ = x => document.querySelector(x);
let state = 0;
let coll = document.getElementsByClassName("collapsible");
let i;

function handleNav() {
    $('.nav-mobile').classList.toggle("change");
    $('nav').classList.toggle("show-mobile");
    state = !state;
    if (state) {
        $('ul').style.height = '100%';
        $('header').style.height = '100%';
    } else {
        $('ul').style.height = '0';
        $('header').style.height = '0';
    }
}

$('.nav-mobile').onclick = x => {
    handleNav();
}

document.querySelectorAll('.nav-btn').forEach( e => {
    e.onclick = x => {
        if (window.innerWidth <= 800) handleNav();
    }
});

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}