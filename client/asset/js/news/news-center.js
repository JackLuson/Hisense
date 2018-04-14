/*
 * @Author: Jack Lu
 * @Date: 2018-04-14 21:01:12
 * @Last Modified by: Jack Lu
 * @Last Modified time: 2018-04-14 21:06:13
 */
$(function () {
    $('[data-categoryId]').on('click', function () {
        // console.log(this);
        // eslint-disable-next-line
        var text = $(this).children('span').eq(1).text();
        // console.log(text);
        $('.title h3').text(text);
    });

    /* 分页器设置 */
    var currentPage = 1;
    var totalPages = 10;
    // eslint-disable-next-line
    var options = {
        'bootstrapMajorVersion': '3',
        'alignment': 'center', //居中显示
        'currentPage': currentPage, //当前页数
        'totalPages': totalPages, //总页数 注意不是总条数
        'onPageClicked': function (event, originalEvent, type, page) {
            // console.log(event, originalEvent, type, page);
            currentPage = page;
            // data.page = currentPage;
            this.currentPage = currentPage;
        }
    };
    $('#pagination').bootstrapPaginator(options);


});