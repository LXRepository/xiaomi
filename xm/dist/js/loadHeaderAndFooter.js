define(["jquery"],function ($) {
	$(".head-nav").load("/html/include/header.html",function(){
		
		$(function(){
			

			var query = (location.search.length > 0 ? location.search.substring(1) : null);
			if(null!=query)
			{
				var name = location.search.substring(1);
				$(".unlogoin").hide();
				$(".logoin").show();
				$(".logoin li").html(name+"欢迎您！")
			}else{
				$(".unlogoin").show();
				$(".logoin").hide();
			}
			
			
		})
		});
		$(".banner").load("/html/include/banner.html",function(){
			$(".search-lef :text").keyup(function(){
				const txt = $(this).val();
				let len = txt.length;
				const url = `https://suggest.taobao.com/sug?code=utf-8&q=${txt}&callback=?`;
				$.getJSON(url,function(data){
					let html = "";
					data.result.forEach(function(curr){
					html += `<li><a href="javascript:void(0)"><span class="span">${curr[0]}</span></a></li>`
				});
				$(".suggest").show().html(html);
				});
				if (len === 0) {
                    $(".old-search").show();
                    $(".suggest").hide();
				} else {
					$(".old-search").hide();
				}
			});
			$(".search-lef :text").focusin(function(){
				$(".moke").hide();
				$(".search-more").show()
				    $(".search-more").css({'box-sizing':'border-box','border':'1px solid red'});
				    $(".sousuo").css({'box-sizing':'border-box','border':'1px solid red'});
				     $(this).css({'box-sizing':'border-box','border':'1px solid red'});
				const txt = $(this).val();
				let len = txt.length;
				if (len === 0) {
                    $(".old-search").show();
				} else {
					$(".old-search").hide();
                    $(".suggest").show();
				}
			});
			$(".search-lef :text").blur(function(){
				$(".search-more").css({'box-sizing':'border-box','border':'0px solid '});
				$(".sousuo").css({'box-sizing':'border-box','border':'1px solid #e0e0e0'});
				$(this).css({'box-sizing':'border-box','border':'1px solid #e0e0e0'});
				$(".old-search").hide();
				const txt = $(this).val();
				let len = txt.length;
				if (len === 0) {
                    $(".moke").show();
				} else {
					$(".moke").hide();
					$(".suggest").delegate("li", "click", function(){
						const txt =$(this).find("span").text();
						$(".search-lef :text").val(txt);
						$(".search-more").hide();
					});
				};
			});

		});
		$(".concat").load("/html/include/concat.html",function () {
			// body...
		})
		$(".address").load("/html/include/address.html",function () {
			// body...
		})
		$(".footer").load("/html/include/footer.html",function(){

		});
		$(".f-dow").load("/html/include/f-dow.html",function(){

		});

})