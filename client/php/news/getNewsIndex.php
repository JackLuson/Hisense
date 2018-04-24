<?php
header('Content-Type:text/html;charset=utf-8');
require_once "../../util/php/DButil.php";
$sql = "SELECT a.id, a.title, a.created,c.name,a.feature FROM articles a LEFT JOIN categories as c ON a . category_id = c . id WHERE a.category_id = 1 ORDER BY a.created DESC LIMIT 0, 6";
// echo $sql;
// 执行sql语句
$data1 = query($sql);
$sql = "SELECT a.id, a.title, a.created,c.name FROM articles a LEFT JOIN categories as c ON a . category_id = c . id WHERE a.category_id = 2 ORDER BY a.created DESC LIMIT 1,5";
$data2 = query($sql);
$sql = "SELECT a.id, a.title, a.created,c.name FROM articles a LEFT JOIN categories as c ON a . category_id = c . id WHERE a.category_id = 3 ORDER BY a.created DESC LIMIT 1,5";
$data3 = query($sql);
$res = array("code" => 200, "msg" => "获取新闻数据失败,请联系管理员 666-6666");
if (!empty($data1) || !empty($data2) || !empty($data3)) {
    $res["code"] = 100;
    $res["msg"] = "获取数据成功";
    $res["data1"] = $data1;
    $res["data2"] = $data2;
    $res["data3"] = $data3;
}

$json = json_encode($res, JSON_UNESCAPED_UNICODE);
echo $json;

?>
