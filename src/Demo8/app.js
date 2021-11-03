$(function() {
    //切换标签选中样式
    $('.vertical-tabs a').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
});