window.onload = function() {
    var btn = document.querySelector(".btn");
    btn.addEventListener("click", myFunction);
    function myFunction() {
        if (!this.checked) {
            document.querySelector(".btn").style.backgroundColor = 'blue';
        } else {
            document.querySelector(".btn").style.backgroundColor = 'green';
        }
        // this.checked = '';
        // btn.removeEventListener("click", myFunction);
    }
    // document.querySelector(".btn").onclick = function() {
    //     if (!this.checked) {
    //         document.querySelector(".btn").style.backgroundColor = 'blue';
    //     } else {
    //         document.querySelector(".btn").style.backgroundColor = 'green';
    //     }
        
    // }
}