require(["config"], function(){
	require(["jquery","template","cookie","load","xm_carousel","bootstrap"], function($,template){
		$("input").focusin(function (e) {
			$(".form-group3").css("display","none");
			$(".alert-danger").text("");
		})


		$(".btn-primary").on("click",function(e){
			let _username = $("#form-username").val(),
				_password = $("#form-password").val();
			
			$.ajax({
				type : "post", 
				url : "http://localhost/project/src/php/login.php", 
				data : {username:_username, password:_password}, 
				dataType : "json", 
				success : function(resData){ 
					if (resData.res_code === 1) { 
						
						location="/index.html?"+resData.res_body.username;
					} else {
						$(".form-group3").css("display","block");
						$(".alert-danger").text("用户名或密码错误!");
					}
				}
			});
		})

	});
});