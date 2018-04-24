/*
 * @Author: Jack Lu
 * @Date: 2018-04-24 01:23:35
 * @Last Modified by: Jack Lu
 * @Last Modified time: 2018-04-25 01:02:40
 */
$(function () {
    /* eslint-enable */

    // 点击切换显示内容
    $('.tabTog').children('a').eq(0).css('border-bottom', '5px solid #00A5A8');
    $('.tabTog').on('click', function (e) {
        var index = e.target.dataset.index;
        // console.log(e.target.dataset.index);
        /* eslint-disable */
        $('.tabTog').children('a').css('border-bottom', 'none');
        $(this).children('a').css('border-bottom', '5px solid #00A5A8');
        if (index == 1) {

            $('.feedback').css('display', 'block');
            $('.address').css('display', 'none');
        } else if (index == 2) {
            $('.address').css('display', 'block');
            $('.feedback').css('display', 'none');
        }

    });
    /* eslint-disable */
    // 地图模块
    var map = new BMap.Map('container'); // 创建地图实例
    var point = new BMap.Point(113.016568, 22.67829); // 创建点坐标
    map.centerAndZoom(point, 15);
    map.enableScrollWheelZoom(); //鼠标滚轮放大
    var marker = new BMap.Marker(point); // 创建标注
    map.addOverlay(marker); // 将标注添加到地图中
    var opts = {
        'width': 200, // 信息窗口宽度
        'height': 50, // 信息窗口高度
        'title': '海信信息产业园', // 信息窗口标题
        'enableMessage': true, //设置允许信息窗发送短息
        'message': '坐标：113.016568,22.67829'
    };
    var infoWindow = new BMap.InfoWindow('地址：江门市先进制造业江沙示范园区海信大道8号', opts); // 创建信息窗口对象
    marker.addEventListener('click', function () {
        map.openInfoWindow(infoWindow, point); //开启信息窗口
    });
    /* 发送ajax请求手机数据 */
    $('.button').on('click', function () {
        var date = moment().format('YYYY-MM-DD');
        // console.log(date);
        var data = $('.basic-grey').serialize();
        // console.log(data);
        data += date;
        $.ajax({
            type: "post",
            url: '../../php/feedback.php',
            data: data,
            dataType: "json",
            success: function (res) {
                console.log(res);
                if (res.code == 100) {
                    layer.alert(res.msg, function () {
                        location.reload();
                    });
                } else {
                    layer.alert(res.msg);
                }
            }
        });
    });

});