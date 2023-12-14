

let hamburger = document.querySelector(".fa-bars");
hamburger.addEventListener('click', () => {
    let nav = document.querySelector('nav');


    nav.classList.toggle('active')
})



// Accordion Section Code 

var acc = document.getElementsByClassName("accordion");

var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        let icon = document.querySelectorAll('.plus');
        // console.log(typeof (icon))
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";

        } else {
            panel.style.display = "block";
        }
    });
}








