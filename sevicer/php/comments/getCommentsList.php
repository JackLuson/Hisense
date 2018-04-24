<?php
header('Content-Type:text/html;charset=utf-8');
require_once "../../util/php/DButil.php";
$sql = "SELECT COUNT(*) as pageTotal FROM feedback";
    // echo $sql;
$arr1 = query($sql)[0]['pageTotal'];

$currentPage = ((int)$_GET['currentPage'] - 1) * 10;
$pageSize = $_GET['pageSize'];
$sql2 = "SELECT c.id, c.name,c.phone,c.content, c.created,c.status,a.nickname FROM feedback AS c LEFT JOIN users AS a ON c.user_id = a.id ORDER BY c.created DESC  LIMIT {$currentPage} , {$pageSize} ";
    // echo $sql2;

$arr2 = query($sql2);
$res = array("code" => 200, "msg" => "获取数据失败");
if (!empty($arr2)) {
    $res['code'] = 100;
    $res["msg"] = "获取数据成功";
    $res['col'] = $arr1;
    $res["data"] = $arr2;
}
echo json_encode($res, JSON_UNESCAPED_UNICODE);
?>
