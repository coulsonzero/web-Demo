window.onload = function() {
    $(".topbar-link").click(function () {
        console.log(this)
        $(".topbar-link").removeClass("is-active");
        $(this).addClass("is-active");
    });
}