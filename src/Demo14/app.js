window.onload = function() {
    $(".customers-tab-item").click(function() {
        $(".customers-tab-item").removeClass("active")
        $(this).addClass("active")
    })
}