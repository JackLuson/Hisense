/*
 * @Author: Jack Lu 
 * @Date: 2018-03-09 09:46:05 
 * @Last Modified by: Jack Lu
 * @Last Modified time: 2018-04-25 22:48:49
 */
// 登录验证
/* eslint-disable */
checkLogin(2, logined());

function logined() {
    $(function () {
        /* 分页器设置 */
        var currentPage = 1;
        var totalPages = 50;
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
            $.get('../php/comments/getCommentsList.php', {
                    'currentPage': currentPage,
                    'pageSize': pageSize,
                },
                function (response) {
                    // console.log(response);
                    if (response.code == 100) {
                        var html = template('feedbackTemp', response);
                        // console.log(html);
                        $('#dataset').html(html);
                        $('.total span').text(Math.ceil(response.col / pageSize));
                        options.totalPages = Math.ceil(response.col / pageSize);

                        options.currentPage = currentPage;
                        $('#pagination').bootstrapPaginator(options);
                    } else {
                        layer.alert(data.msg, {
                            icon: 2,
                            function () {
                                location.reload();
                            }
                        })
                    }




                },
                'json'
            );
        }

        /* 点击批准 */
        $("tbody").on("click", '.approve', function () {
            // console.log(this);
            // 获取留言ID号进行操作
            var that = this;
            var id = this.parentNode.dataset.index;
            // console.log(id);
            // 批准发送1
            var status = 1;
            // 发请求 
            $.ajax({
                type: "post",
                url: "../php/comments/updateFeedback.php",
                data: {
                    id: id,
                    // action: 'approve',
                    status: status
                },
                dataType: "json",
                success: function (response) {
                    console.log(response);
                    if (response.code == 100) {
                        layer.alert(response.msg, {
                            icon: 1,

                        })
                        $(that).parent().prev().text('已批准');
                        $(that).parent().parent().attr('class','success');
                        // console.log($(that).parent());
                    } else {
                        layer.alert(response.msg, {
                            icon: 2,
                        })
                    }

                }
            });
        });

        // 点击拒绝
        $("tbody").on("click", '.reject', function () {
            // console.log(this);
            // 获取留言ID号进行操作
            var that = this;
            var id = this.parentNode.dataset.index;
            // console.log(id);
            // 批准发送1
            var status = 2;
            // 发请求 
            $.ajax({
                type: "post",
                url: "../php/comments/updateFeedback.php",
                data: {
                    id: id,
                    status: status
                },
                dataType: "json",
                success: function (response) {
                    console.log(response);
                    if (response.code == 100) {
                        layer.alert(response.msg, {
                            icon: 1,

                        })
                        $(that).parent().prev().text('已拒绝');
                        // console.log($(that).parent());
                        $(that).parent().parent().attr('class', 'danger');
                    } else {
                        layer.alert(response.msg, {
                            icon: 2,
                        })
                    }

                }
            });
        });
    });
}