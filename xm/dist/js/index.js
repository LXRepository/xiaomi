require(["config"], function(){
	require(["jquery","template","cookie","bootstrap","load"], function($,template){
		$(function(){
			$.getJSON("/mock/hotsale.json",function(data){
				const html = template("hotsale",{list:data.res_body.list});
				$("#lbuls").prepend(html);
			})
		});
		
	});
});