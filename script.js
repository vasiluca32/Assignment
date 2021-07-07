
let scrollvalue = window.scrollY;
let button = document.getElementById("my-button");

function addClass() {
    button.classList.add("sticky-button");
}

function removeClass() {
    button.classList.remove("sticky-button");
}

window.addEventListener('scroll', function(){ 
    
    scrollvalue = window.scrollY;

    if(scrollvalue > 330){
        addClass();
    }
    else {
        removeClass();
    }

    
    
});