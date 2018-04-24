<?php
header('Content-Type:text/html;charset=utf-8');
require_once "../../util/php/DButil.php";
// echo '<pre>';
// print_r($_POST['id']);
// print_r($_POST['action']);
// echo '</pre>';
$id = $_POST['id'];
// $action = $_POST['action'];
// 判断是批准还是拒绝操作
unset($_POST['id']);
// unset($_POST['action']);
$res = update("feedback", $_POST, $id);
// if ($action == 'approve') {
//     $sql = "UPDATE feedback f SET f.status = {$status} WHERE id = {$id}";
// }

$arr = array("code" => 200, "msg" => "操作失败,请重试!");
if ($res) {
    $arr['code'] = 100;
    $arr["msg"] = "操作成功";
}
echo json_encode($arr, JSON_UNESCAPED_UNICODE);
?>
