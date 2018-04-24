/*
 * @Author: Jack Lu
 * @Date: 2018-04-02 08:39:58
 * @Last Modified by: Jack Lu
 * @Last Modified time: 2018-04-23 19:58:41
 */

$(function () {
    $('title').text('欢迎-广东电子有限公司');
    /* 图片轮播部份 */
    $.get('./php/index/index.php',
        function (data) {
            // console.log(data);
            var slideData = data.data_slide;
            // console.log(slideData);
            if (data.code === 100) {
                $.each(slideData, function (index, value) {
                    $('.hs_carousel .carousel-inner img').eq(index).attr('src', value.image);
                });
            }
        },
        'json'
    );
    /* 获取新闻列表信息 */
    $.get('./php/news/getNewsIndex.php', function (response) {
        // console.log(response);
        /* eslint-disable */
        var html = template('newsSlide', response);
        // console.log(html);
        $('.swiper-wrapper').html(html);
        var html1 = template("newspart1", response);
        $('.news_group').html(html1);
        var html2 = template('newspart2', response);
        // console.log(html2);
        $('.news_root').html(html2);
        var html3 = template('newspart3', response);
        // // console.log(html3);
        $('.news_notice').html(html3);
        // eslint-disable-next-line
        var mySwiper = new Swiper('.swiper-container', {
            'autoplay': 5000, //可选选项，自动滑动
            'loop': true,
            'pagination': '.swiper-pagination',
            'paginationType': 'fraction'
        });
    }, 'json');
});