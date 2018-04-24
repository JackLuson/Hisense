<?php
header('Content-Type:text/html;charset=utf-8');
require_once "../../util/php/DButil.php";
$id = $_GET['id'];
$sql = "SELECT a.title, a.feature, a.created, a.content, a.category_id, a.status, c.name FROM articles a LEFT JOIN categories as c ON a . category_id = c . id WHERE a.id = {$id}";
// echo $sql;

// 执行sql语句
$data = query($sql);
$res = array("code" => 200, "msg" => "加载失败,请联系管理员 666-6666");
if (!empty($data)) {
    $res["code"] = 100;
    $res["msg"] = "加载成功";
    $res["data"] = $data;
}

$json = json_encode($res, JSON_UNESCAPED_UNICODE);
echo $json;

?>
