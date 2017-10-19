var acc = document.querySelectorAll(".accordion");

for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        for (var j = 0; j < acc.length; j++) {
            if (acc[j] !== this) {
                acc[j].classList.remove("active");
                acc[j].nextElementSibling.classList.remove("show");
            } else {
                this.classList.toggle("active");
                this.nextElementSibling.classList.toggle("show");
            }
        }
    }
}
