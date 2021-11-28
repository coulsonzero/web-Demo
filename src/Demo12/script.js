window.onload = function () {
    var content = document.querySelectorAll(".messageBox");
    for (var i = 0; i < content.length; i++) {
        if(i%2 != 0) {
            content[i].style.marginLeft = "50px";
            content[i].style.backgroundColor = "rgb(46, 187, 88)";
            content[i].style.color = "rgba(255, 255, 255, 1)"
        }
    }
}