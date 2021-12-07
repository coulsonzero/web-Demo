window.onload = function() {
    const titles = document.querySelectorAll(".customers-tab-item")
    const imgBox = document.querySelectorAll(".customers-tab-content")
    const titleArr = [ "安全生产", "产品全生命周期", "化肥生产", "工业互联网", "富岛应急安全"]

    // Table toggle
    $(".customers-tab-item").click(function() {
        for (let i = 0; i < titles.length; i++) {
            titles[i].addEventListener("click", function() {
                $(".customers-tab-item").removeClass("active")
                // $(this).addClass("active")
                titles[i].classList.add("active")
                $(".customers-tab-content").removeClass("show")
                imgBox[i].classList.add("show")
            })
        }
    })

    /*
    $(".customers-tab-item").click(function() {
        $(".customers-tab-item").removeClass("active")
        $(".customers-tab-content").removeClass("show")
        console.log(this.innerHTML)
        $(this).addClass("active")

        switch(this.innerHTML) {
            case titleArr[1]:
                // console.log(imgBox[1].className)
                imgBox[1].classList.add("show")
                break;
            case titleArr[2]:
                // console.log(imgBox[2].className)
                imgBox[2].classList.add("show")
                break;
            case titleArr[3]:
                // console.log(imgBox[3].className)
                imgBox[3].classList.add("show")
                break;
            case titleArr[4]:
                // console.log(imgBox[4].className)
                imgBox[4].classList.add("show")
                break;
            default:
                // console.log(imgBox[0].className)
                imgBox[0].classList.add("show")
        } 
    })
    */
}