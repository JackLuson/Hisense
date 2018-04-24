/*
 * @Author: Jack Lu
 * @Date: 2018-04-11 19:40:36
 * @Last Modified by: Jack Lu
 * @Last Modified time: 2018-04-21 01:30:25
 */
$(function () {
    
    /* 获取企业新闻部分 */
    $.get('../../php/news/getNewsIndex.php', function (response) {
        // console.log(response);
        var html = template('newsSlide', response);
        console.log(html);
        $('.news_swiper .swiper-wrapper').html(html);
        var html1 = template("newspart1", response);
        $('.news_list>.list-group').html(html1);
        var html2 = template('newspart2', response);
        // console.log(html2);
        $('.root .list-group').html(html2);
        var html3 = template('newspart3', response);
        // console.log(html3);
        $('.notice .list-group').html(html3);
        // eslint-disable-next-line
        var mySwiper = new Swiper('.swiper-container', {
            'autoplay': 5000, //可选选项，自动滑动
            'loop': true,
            'pagination': '.swiper-pagination',
            'paginationType': 'fraction'
        });
    }, 'json');
});