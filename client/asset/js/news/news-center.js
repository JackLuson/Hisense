/*
 * @Author: Jack Lu
 * @Date: 2018-04-14 21:01:12
 * @Last Modified by: Jack Lu
 * @Last Modified time: 2018-04-18 08:30:13
 */
/* eslint-disable */
$(function () {

    var searchHref = getSearch();
    var categoryId = searchHref.id;
    console.log(categoryId);
    /* 分页器设置 */
    var currentPage = 1;
    var totalPages = 10;
    // eslint-disable-next-line

    /* 获取新闻内容 */
    /*1.默认首页渲染*/
    /*1.数据展示*/
    var pageSize = 10;
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
            console.log(currentPage);
            render();
        }
    };
    render();

    function render() {
        $.get('../../php/news/getNewsLists.php', {
            'currentPage': currentPage,
            'pageSize': pageSize,
            'id': categoryId
        },
        function (response) {
            // console.log(response);

            var html = template('newsList', response);
            // console.log(html);
            $('.news_content ul').html(html);
            $('.total span').text(Math.ceil(response.totalPages / pageSize));
            options.totalPages = Math.ceil(response.totalPages / pageSize);
            $('.title h3').text(response.data[0].name);
            options.currentPage = currentPage;
            $('#pagination').bootstrapPaginator(options);
        },
        'json'
        );
    }
    /* 点击切换新闻分类 */
    $('[data-categoryId]').on('click', function () {
        categoryId = this.dataset.categoryid;
        render();
        
    });
});