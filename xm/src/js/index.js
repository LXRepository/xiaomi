require(["config"], function(){
	require(["jquery","template","cookie","bootstrap","load"], function($,template){
		$(function(){
			$.getJSON("/mock/hotsale.json",function(data){
				const html = template("hotsale",{list:data.res_body.list});
				$("#lbuls").prepend(html);
			})
		});

		$(function(){
			$.getJSON("/mock/lbsmall.json",function(data){
				const html = template("bigul",{list:data.res_body.list});
				$("#attendbig").prepend(html);
			})
		});

		$(function(){
			$.getJSON("/mock/lbul.json",function(data){
				const html = template("lbultop",{lists:data.res_body.list});
				$("#lbula").prepend(html);
			})
		});

		$(function(){
			$.getJSON("/mock/goods.json",function(data){
				const html = template("goodappend",{list:data.res_body.list});
				$("#goodul").prepend(html);
			})
		});

		$(function(){
			$.getJSON("/mock/goods.json",function(data){
				const html = template("goodappends",{list:data.res_body.list});
				$("#gooduls").prepend(html);
			})
		});

		$(function(){
			$.getJSON("/mock/goods.json",function(data){
				const html = template("goodappend3",{list:data.res_body.list});
				$("#good3").prepend(html);
			})
		});
		$(function(){
			$.getJSON("/mock/goods.json",function(data){
				const html = template("goodappend4",{list:data.res_body.list});
				$("#good4").prepend(html);
			})
		});
		$(function(){
			$.getJSON("/mock/goods.json",function(data){
				const html = template("goodappend5",{list:data.res_body.list});
				$("#good5").prepend(html);
			})
		});

		$("a").on("click",function(e){
			var query = (location.search.length > 0 ? location.search.substring(1) : null);

			$("a").attr("href","/html/detail.html?"+query);
			console.log($("a").attr("href"));	
		});

		$("#leftsp").on("click",function () {
			$("#lbula").css("margin-left","-1240px")
		});
		$("#righsp").on("click",function () {
			$("#lbula").css("margin-left","0px")
		})

		
	});
});