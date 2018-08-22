require(["config"], function(){
	require(["jquery","template","cookie","load","bootstrap","city","citydata","main"], function($){
		$(document).ready(function(){
			$(".r-choose li")[0].className="active";
			$(".r-color li")[0].className="active";
		})

		$(function(){
			let len = $(".r-choose li").length;
			let lenn = $(".r-color li").length;
			let acindex = 0;
			for (let i = 0; i < len; i++) {
				(function(i){
					$(".r-choose li")[i].onclick = function(e){
						$(".r-choose li")[acindex].className=" ";
						$(".r-choose li")[i].className="active";
						acindex = i;
						let h1  = $(this).find(".name").html();
						let h3  = $(this).find(".price").html();
						$(".h1").html(h1);
						$(".code, .t-price").html(h3);
						$(".r-pay").html("总计："+h3)
					}
				})(i)
			};
			let bcindex = 0;
			for (let i = 0; i < lenn; i++) {
				(function(i){
					$(".r-color li")[i].onclick = function(e){
						$(".r-color li")[bcindex].className=" ";
						$(".r-color li")[i].className="active";
						bcindex = i;
						let h2  = $(this).find(".c-name").html();
						$(".h2").html(h2)
					}
				})(i)
			}
		});

		$(function(){
			let len = $(".l-img img").length;
			let lenn = $(".dos span").length
			let topDOM = $(".s-left")
			let acindex = 1;
			let index = 0;
			function autoplay() {
				$(".l-img img")[index].style.opacity = "0";
				$(".l-img img")[acindex].style.opacity = "1";
				$(".dos span")[index].className = "gray";
				$(".dos span")[acindex].className = "red";
				index = acindex;
				acindex = acindex+1;
				if (index == len-1) {
					acindex = 0;
				}
			};
			var timer = setInterval(autoplay,2000);
			$(".s-left").mouseenter(function () {
				clearInterval(timer);
			});
			$(".s-left").mouseleave(function () {
				timer = setInterval(autoplay,2000);
			});
			let aacindex = 1;
			for (var i = 0; i < lenn; i++) {
				(function (i) {
					$(".dos span")[i].onclick = function () {
						$(".dos span")[i].className = "red";
						$(".dos span")[aacindex].className = "gray";
						$(".l-img img")[aacindex].style.opacity = "0";
						$(".l-img img")[i].style.opacity = "1";
						aacindex = i;
					}
				})(i);
			};
			$(".left").on("click",function(){
				$(".l-img img")[acindex].style.opacity = "0";
				$(".l-img img")[index].style.opacity = "1";
				$(".dos span")[acindex].className = "gray";
				$(".dos span")[index].className = "red";
				acindex = index;
				index = index-1;
				if (index<0) {
					index = len-1
				}
			});
			$(".right").on("click",function(){
				$(".l-img img")[index].style.opacity = "0";
				$(".l-img img")[acindex].style.opacity = "1";
				$(".dos span")[index].className = "gray";
				$(".dos span")[acindex].className = "red";
				index = acindex;
				acindex = acindex+1;
				if (acindex>len-1) {
					acindex = 0;
				}
			})
		});

		$(window).scroll(function() {
			let scroll_top = $(document).scrollTop();
			let offset_top = $(".session").offset().top;
			let e = $(".explain").offset().top ;
			let n = $(".bz").offset().top;
			if (scroll_top > offset_top && scroll_top <= e-650) {
				$("#fixed").css({"position":"fixed","top":"40px","float":"left"})
			} 
			else if (scroll_top > e-650) {
				$("#fixed").css({"position":"absolute","float":"left","top":e-612+"px"})
			}
			else {
				$("#fixed").css({"float":"left","position":"static","top":"0px"})
			};
			if (scroll_top > n) {
				/*$(".navv").css({"display":"block"});*/
				$(".navv").slideDown();
			}
			else{
				/*$(".navv").css({"display":"none"});*/
				$(".navv").slideUp();
			}
		});


		$(function(){

			$(".add").on("click",function(){
				const currProd = {
					id:$(".left").attr("id"),
					title:$(".choose").text(),
					price:$(".code").text().slice(0,-1),
					img:$(".l-img img:first-child").attr("src"),
					amount:1
				};
				$.cookie.json = true;
				const products = $.cookie("products")||[];
				const index = exist(currProd.id,products);
				if (index === -1) {
					products.push(currProd);
				}else{
					products[index].amount++;
				}

				$.cookie("products",products,{expirse:7,path:"/"});
				/*return false;*/
			});
				function exist(id, array) {
				for (let i = 0, len = array.length; i < len; i++) {
					if (array[i].id == id)
						return i;
				}
				return -1;
			}
		});


		
	});
});