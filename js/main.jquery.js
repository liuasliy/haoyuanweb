var swiper = new Swiper('.banner-wrap', {
    pagination: '.swiper-pagination',
    paginationClickable: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30,
    zoom : true,
    // effect: 'fade'
});

var swiper2 = new Swiper('.com-carousel', {
    pagination: '.swiper-pagination',
    effect: 'flip',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
});


$(function() {
    /** 首页新闻动态效果 */
    $('.news-content .news-item').each(function() {
        $(this).on('mouseover',function() {
            $(this).addClass('active')
        })
        $(this).on('mouseout',function() {
            $(this).removeClass('active')
        })
    });

    /** 服务内容切换 */
    $('.tabs.is-toggle li').each(function(){
        $(this).on('click', function(){
            $(this).siblings().removeClass('is-active')
            $(this).addClass('is-active')
            var contents = $('.tab-content .tab-item')
            $(contents[$(this).index()]).siblings().hide()
            $(contents[$(this).index()]).show()
        })
    })
    /** 右侧浮动模块 */
    // $('.float-wrap .float-abtn').on('click', function(){
    //     $('.float-content').animate({
    //         height:'toggle'
    //     }, 'fast' ,function(){
    //         if($('.float-content').is(":hidden")){
    //             $('.float-wrap .float-abtn img').attr('class', 'menu-up')
    //         } else {
    //             $('.float-wrap .float-abtn img').attr('class', 'menu-down')
    //         }
    //     })
    // })

    // $('.float-wrap').css({
    //     right: (document.body.clientWidth || window.screen.width - 1200 )/6 +'px'
    // })
    $('.h-search').on('click', function(){
        $('.search-main').css({
            display: 'flex'
        })
        $(this).hide()
    })

    // $(".list_dt").on("click",function () {
    //     $('.list_dd').stop();
    //     $(this).siblings("dt").removeAttr("id");
    //     if($(this).attr("id")=="open"){
    //         $(this).removeAttr("id").siblings("dd").slideUp();
    //     }else{
    //         $(this).attr("id","open").next().slideDown().siblings("dd").slideUp();
    //     }
    // });
})