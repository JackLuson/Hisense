/*
 * @Author: Jack Lu 
 * @Date: 2018-04-08 10:53:39 
 * @Last Modified by: Jack Lu
 * @Last Modified time: 2018-04-08 15:21:17
 */
checkLogin(2, logined());

function logined() {
    $(function () {
        // 一进来就开始加载数据
        $.post("../php/setting/getSlideDatas.php",
            function (data, textStatus, jqXHR) {
                // console.log(data);
                if (data.code == 100) {
                    var html = template("slidesTemp", data);
                    // console.log(html);
                    $("tbody").html(html);
                }
            },
            "json"
        );
        // 加载与上传图片
        $("input#image").on("change", function () {
            var file = this.files[0];
            var data = new FormData();
            data.append("file", file);
            var xhr = new XMLHttpRequest();
            xhr.open("post", "../php/common/fileUpload.php", true);
            xhr.send(data);
            xhr.onreadystatechange = function () {
                if (xhr.status == 200 && xhr.readyState == 4) {
                    var res = JSON.parse(xhr.responseText);
                    if (res.code == 100) {
                        $("#preview").attr("src", res.path).show();
                        $("#img-data").val(res.path);
                    } else {
                        layer.alert(res.msg);
                    }

                }
            }
        });
        /* 点击确认添加 */
        $("#btn-sure").on("click", function () {
            var data = $("#slidedata").serialize();
            console.log(data);
            // data = data.replace(/=on/g, "=1");
            $.post("../php/setting/addSlideDatas.php", data,
                function (data, textStatus, jqXHR) {
                    if (data.code == 100) {
                        layer.alert(data.msg, {
                            icon: 1
                        }, function () {
                            location.reload();

                        });
                    } else {
                        layer.alert(data.msg, {
                            icon: 2
                        })
                    }

                },
                "json"
            );
        })
        /* 注册删除事件 */
        $("#dataset").on("click", ".del", function () {
            var id = $(this).parent().parent().attr("data-id");
            $.post("../php/setting/delSlideDatas.php", { id: id },
                function (data, textStatus, jqXHR) {
                    if (data.code == 100) {
                        layer.alert(data.msg, { icon: 1 }, function () {
                            location.reload();
                        })
                    } else {
                        layer.alert(data.msg);
                    }

                },
                "json"
            );
        });






    });

}