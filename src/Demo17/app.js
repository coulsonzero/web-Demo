window.onload = function () {
    // Add active class to current nav selected link
    var a = document.querySelectorAll(".nav-link");
    for (var i = 0, length = a.length; i < length; i++) {
        a[i].addEventListener("click", function() {
            console.log("qqq")
            var b = document.querySelector(".header-nav li a.active");
            if (b) b.classList.remove("active");
            this.parentNode.classList.add('active');
        })
    }
}