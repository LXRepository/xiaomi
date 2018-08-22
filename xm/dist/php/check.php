<?php 
header("Access-Control-Allow-Origin:*");
	$tel= $_GET["tel"];


	mysql_connect("localhost:3306", "root", "");

	mysql_select_db("db");

	mysql_query("set character set utf8");
	mysql_query("set names utf8");

	$sql = "SELECT * FROM members WHERE tel='$tel'";

	$result = mysql_query($sql);

	$row = mysql_fetch_array($result);

	if ($row) { 
		$arr = array("res_code"=>1, "res_message"=>"该手机号已注册");
		echo json_encode($arr);
	} else { 
		$arr = array("res_code"=>0, "res_message"=>"用户名可以继续注册");
		echo json_encode($arr);
	}

	mysql_close();
 ?>