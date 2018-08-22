require(["config"], function(){
	require(["jquery","template","cookie","load","xm_carousel","bootstrap"], function($,template){
		let timer = null, num = 30;
		$("#getCodeBtn").on("click",function(e){
			let _this = $(this);
			$(this).attr("class","onclick");
			$(this).attr("disabled","disabled");
			timer = window.setInterval(function () {
				if (num == 0)
				{
					_this.attr("class","");
					_this.removeAttr("disabled");
					_this.text("获取验证码");
					clearInterval(timer);
					num = 30;
					return;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
				}
				_this.text(num-- + " s后重新获取");
			}, 1000);
		});



        $("#form-tel").on("focusin", function(e){
        	$(".form-group3").css("display","none");

        })
		$("#form-tel").on("blur", function(e){

			var xhr = new XMLHttpRequest();
		
			xhr.open("GET", "http://localhost/project/src/php/check.php?tel=" + $(this).val(), true);
		
			xhr.send();
			
			xhr.onreadystatechange = function(){
				if (xhr.readyState === 4) { 
					if (xhr.status === 200) { 
						let data = xhr.responseText; 
						data = JSON.parse(data);
						
						if (data.res_code === 1) {
							$(".form-group3").css("display","block");
						    $(".alert-danger").text("该手机号已注册");
						} 
					}
				}
			}
		});


		$(".btn-primary").on("click",function(e){
			e.preventDefault();

			var _username = $("#form-username").val(),
			_ulen = _username.length>2,
			_password = $("#form-password").val(),
			_plen = _password.length>5,
			_tel = $("#form-tel").val(),
			_tlen = _tel.length>10;
			if (_ulen&&_tlen&&_plen) {
				var xhr = new XMLHttpRequest();

				xhr.open("POST", "http://localhost/project/src/php/register.php", true);

				var queryString = `username=${_username}&password=${_password}&tel=${_tel}`;
				xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
				xhr.send(queryString);

				xhr.onreadystatechange = function(){
					if (xhr.readyState === 4) { 
						if (xhr.status === 200) { 

							var data = xhr.responseText;
							data = JSON.parse(data);

							console.log(data)
							if (data.res_code === 1) {
								location = "/html/login.html";
								

							} else {
								$(".form-group3").css("display","block");
								$(".alert-danger").text("请正确填写！");
							}
						}
					}
				}
			}

		});

 function parseDom(arg) {

　　 var objE = document.createElement("div");

　　 objE.innerHTML = arg;

　　 return objE.childNodes;

};
$("form").delegate("input","blur",function(e){
	let thi =$(this).attr("id");
		let val = $(this).val();
		if (thi == "form-tel") {
			patten = new RegExp(/^1(3\d|5[0-35-9]|8[025-9]|47)\d{8}$/);
			if (patten.test(val)) {
				$(".ddanger1").css("display","none")
			}else{
				$(".ddanger1").css("display","block")
			}
		}
		else if (thi == "form-username") {
			patten = new RegExp(/^[\u4E00-\u9FA5a-zA-Z][\u4E00-\u9FA5a-zA-Z0-9_]*$/);
			if (patten.test(val)) {
				$(".ddanger3").css("display","none")
			}else{
				$(".ddanger3").css("display","block")
			}
		}
		else if ( thi == "form-password"){
			patten = new RegExp(/^[\x21-\x7E]{6,20}$/);
			if (patten.test(val)) {
				$(".ddanger4").css("display","none")
			}else{
				$(".ddanger4").css("display","block")
			}
		}

})


})
})