/* eslint-disable */

$(function () {

    var searchHref = getSearch();
    var articleId = searchHref.id;
    // console.log(articleId);
    $.get("../../php/news/getNewsById.php", {
            id: articleId
        },
        function (data, textStatus, jqXHR) {
            console.log(data);
            if (data.code == 100) {
                /*渲染新闻标题 */
                var newsData = data.data[0];
                $('.title h3').text(newsData.title);
                // 渲染发布时间
                $('.create').text(newsData.created);
                $('.detail img').attr('src', "../" + newsData.feature);
                $('.detail textarea').val(newsData.content);
                $(".category").text(newsData.name);
            } else {
                layer.alert(data.msg);
            }
        },
        "json"
    );
});


// };