<?php
header('Content-Type:text/html;charset=utf-8');
require_once "../../util/php/DButil.php";
$sql = "SELECT o . value FROM options o WHERE o . `key` = 'home_slides'";

$sql2 = "SELECT a . id, a . title, b . nickname, c . name, a . created, a . status FROM articles as a  WHERE a.category_id = 2 LIMIT 0 , 7 ";
echo $sql2;
$arrData = query($sql);
$res = array("code" => 200, "msg" => "获取数据失败,请联系管理员 666-6666");
if (!empty($arrData)) {
    $res["code"] = 100;
    $res["msg"] = "获取数据成功";
    $res["data_slide"] = json_decode($arrData[0]["value"]);
}

$json = json_encode($res, JSON_UNESCAPED_UNICODE);
// echo $json;
?>
