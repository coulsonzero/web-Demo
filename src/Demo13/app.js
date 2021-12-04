window.onload = function() {
    $(".nav-link").mouseover(function () { 
        $(".nav-link").removeClass("hover active");
        $(this).addClass("hover active");
    });
    /*
    if (this.innerHTML === "About") {
        window.open('http://www.baidu.com','_blank');
    } else if (this.innerHTML === "Service") {
        window.open('../Demo12/index.html','_blank');
    }
    */
}
