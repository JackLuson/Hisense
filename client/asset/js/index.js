/*
 * @Author: Jack Lu
 * @Date: 2018-04-02 08:39:58
 * @Last Modified by: Jack Lu
 * @Last Modified time: 2018-04-11 19:31:57
 */

$(function () {
    $('title').text('欢迎-广东电子有限公司');
    // eslint-disable-next-line
    var mySwiper = new Swiper('.swiper-container', {
        'autoplay': 5000, //可选选项，自动滑动
        'loop': true,
        'pagination': '.swiper-pagination',
        'paginationType': 'fraction'
    });
    /* 图片轮播部份 */
    $.get('./php/index/index.php',
        function (data) {
            var slideData = data.slid_data;

            if (data.code === 100) {
                $.each(slideData, function (index, value) {
                    $('.hs_carousel .carousel-inner img').eq(index).attr('src', value.image);
                });

            }

        },
        'json'
    );
    /* 获取新闻列表信息 */
});