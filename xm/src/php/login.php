<?php 

	
header("Access-Control-Allow-Origin:*");
	$username = $_POST["username"];
	$password = $_POST["password"];

	mysql_connect("111.231.197.212", "root", "root");
	
	mysql_query("set character set utf8");
	mysql_query("set names utf8");
	
	mysql_select_db("db");
	$sql = "SELECT * FROM members WHERE username='$username' AND password='$password'";
	
	$result = mysql_query($sql);
	
	$row = mysql_fetch_array($result, MYSQL_ASSOC);
	 
	if ($row) { 
		$arr = array("res_code"=>1, "res_message"=>"登录成功", "res_body"=>$row);
		echo json_encode($arr);
	} else { 
		$arr = array("res_code"=>0, "res_message"=>"登录失败");
		echo json_encode($arr);
	}
	mysql_close();
 ?>