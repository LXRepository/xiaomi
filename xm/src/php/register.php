<?php 
	header("Access-Control-Allow-Origin:*");
	$username = $_POST["username"];
	$password = $_POST["password"];
	$tel = $_POST["tel"];

	
	mysql_connect("111.231.197.212", "root", "root");
	
	mysql_select_db("db");
	
	mysql_query("set character set utf8");
	mysql_query("set names utf8");
	
	$sql = "INSERT INTO members (username, password, tel) VALUES ('$username', '$password', '$tel')";
	
	$result = mysql_query($sql);
	
	if ($result) { 
		$arr = array("res_code"=>1, "res_message"=>"注册成功");
		echo json_encode($arr);
	} else { 
		$arr = array("res_code"=>0, "res_message"=>"注册失败");
		echo json_encode($arr);
	}
	
	mysql_close();
 ?>