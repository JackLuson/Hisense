/*
 * @Author: Jack Lu 
 * @Date: 2018-04-20 18:15:05 
 * @Last Modified by: Jack Lu
 * @Last Modified time: 2018-04-21 01:28:40
 */
$(function () {
    var contentHeight;
    $('.news_left').css('height', $('.news_right.col-sm-9').height());
    $('.changeTitle').on('click', function () {
        // console.log(this);
        /* 动态变化设置标题 */
        $('.title h3').html($(this).text());
        setTimeout(() => {
            contentHeight = $('.news_right.col-sm-9').height();
            $('.news_left').css('height', contentHeight);
            // console.log(contentHeight);
        }, 100);
    });
});