window.onload = function() {
    $(".topbar-link").click(function () {
        $(".topbar-link").removeClass("is-active");
        $(this).addClass("is-active");
        if (this.innerHTML === "About") {
            window.open('http://www.baidu.com','_blank');
        } else if (this.innerHTML === "Service") {
            window.open('../Demo12/index.html','_blank');
        }
    });
    
}