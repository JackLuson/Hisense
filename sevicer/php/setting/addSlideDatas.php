<?php
header('Content-Type:text/html;charset=utf-8');
require_once "../../util/php/DButil.php";
// echo '<pre>';
// print_r($_POST);
// echo '</pre>';
// 提取出数据库中数据和最大id
$sql = "SELECT o.value FROM options o WHERE o.`key` = 'home_slides' OR o.`key` = 'slide_max_id'";
// echo $sql;
$arr = query($sql);
$data = $arr[0]["value"];
$data = json_decode($data);

// 最大id
$MaxId = $arr[1]["value"];
$MaxId = $MaxId + 1;
$addData = $_POST;
$addData['id'] = $MaxId;
array_push($data, $addData);

$addData = json_encode($data, JSON_UNESCAPED_UNICODE);
$sql = "UPDATE options o SET o . value = {$MaxId} WHERE o . `key` = 'slide_max_id'";
$res = excute($sql);
$arr = array("code" => 200, "msg" => "无法添加,请联系管理员");
if ($res) {
    $sql = "UPDATE options o SET value = '{$addData}' WHERE o.`key` = 'home_slides'";
    $res = excute($sql);
    if ($res) {
        $arr["code"] = 100;
        $arr["msg"] = "添加成功";
    }
}
echo json_encode($arr, JSON_UNESCAPED_UNICODE);
?>
