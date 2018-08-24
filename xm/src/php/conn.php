<?php 
	// 连接
header("Access-Control-Allow-Origin:*");
	mysql_connect("111.231.197.212", "root", "root");
	// 编码 
	mysql_query("set character set utf8");
	mysql_query("set names utf8");
	// 选择数据库
	mysql_select_db("db");
 ?>