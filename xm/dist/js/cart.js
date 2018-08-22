require(["config"], function(){
	require(["jquery","template","cookie","load","xm_carousel","bootstrap"], function($,template){
		


//渲染热销商品
$(function(){
	$.getJSON("/mock/hotsale.json",function(data){
		const html = template("hotsale",{list:data.res_body.list});
		$("#lbuls").prepend(html);
	})
});
//读取cookie 渲染页面
$(function(){
	$("#lbuls").on("click","span",function(){
		const Prod = {
			id:$(this).parent().find(".id").text(),
			title:$(this).parent().find("p").text(),
			price:$(this).parent().find("h4").text(),
			img:$(this).parent().find("img").attr("src"),
			amount:1
		};
		$.cookie.json = true;
		const products = $.cookie("products")||[];
		const index = exist(Prod.id,products);
		if (index === -1) {
			products.push(Prod);
		}else{
			products[index].amount++;
		}

		$.cookie("products",products,{expirse:7,path:"/"});
		window.location.reload(true);

		return false;
	});
	$.cookie.json = true;
	let products = $.cookie("products") || [];

	if (products.length === 0) {
		$(".empty").show();
		return;
	} 

	$(".session").show();
	$(document).ready(function(){
		calcute();
	})
	const html = template("cart-list",{products});
	$(".lists").html(html);


//加减数量
$(".numbers").on("click", ".sub, .add", function(){
	const id = $(this).parent().prevAll(".thisid").text();
	const index = exist(id, products);
	const prod = products[index];
	if ($(this).is(".sub")) {
					if (prod.amount <= 1) // 商品数量小于等于1，不再减
						return;
					prod.amount--;
				} else {
					prod.amount++;
				}
				$.cookie("products", products, {expires:7, path:"/"});
				// 将兄弟元素（文本框）的值修改
				$(this).siblings(".number").text(prod.amount);
				// 更新小计金额
				$(this).parent().siblings(".pay").text((prod.price*prod.amount)+"元");
				// 计算合计
				calcute();
			});


//删除商品
$(".delet").on("click",function () {
	let h =$(document).height()+"px";
	let w =$(document).width()+"px";
	$(".mb").css({"height":h,"width":w,"display":"block"});
	$(".alert").css({"top":"80px"});

	that = $(this);
	$(".yes").on("click",function () {
		$(".mb").css({"height":h,"width":w,"display":"none"});
		$(".alert").css({"top":"0px"});
		const id  = that.siblings(".thisid").text();
		const index = exist(id,products);
		products.splice(index,1);
		$.cookie("products", products, {expires:7, path:"/"});
		that.parent().remove();
		if (products.length === 0) {
			$(".empty").show();
			$(".session").hide();
		}
		calcute();
	})
})

//全选check
$(".check").on("click",function(e){
	let len =  $(".check , .checkk").find("img").attr("src").length;
	if (len === 0) {
		$(".check , .checkk").find("img").attr("src","/imgs/check.png");
		$(".check , .checkk").find("em").css({"opacity":"0"});
	}else{
		$(".check , .checkk").find("img").attr("src","");
		$(".check , .checkk").find("em").css({"opacity":"1"});
	}
	calcute();
})

//单选
$(".checkk").on("click",function(e){
	let len =  $(this).find("img").attr("src").length;
	if (len === 0) {
		$(this).find("img").attr("src","/imgs/check.png");
		$(this).find("em").css({"opacity":"0"});
	}
	else{
		$(this).find("img").attr("src","");
		$(".check").find("img").attr("src","");
		$(".check").find("em").css({"opacity":"1"});
		$(this).find("em").css({"opacity":"1"});

	}
	calcute();

})
//计算函数
function calcute(){
	let sum = 0;
	let sumprice = 0;
	let allproduct = 0;
	$(".list").each(function(index,element){
		let ishere = $(this).find("img").attr("src").length;
		allproduct +=	Number( $(element).find(".number").text());
		if (ishere != 0) {
			sum += Number( $(element).find(".number").text());
			sumprice += sum*Number($(element).find(".pay").text().slice(0,-1))

		}
	});
	if (sum === allproduct) {
		$(".check").find("img").attr("src","/imgs/check.png");
		$(".check").find("em").css({"opacity":"0"});
	}
	$(".calcu-all").text(allproduct);
	$(".calcu-choose").text(sum);
	$(".all-cost span").text(sumprice);

};

//是否存在图片id
function exist(id, array) {
	for (let i = 0, len = array.length; i < len; i++) {
		if (array[i].id == id)
			return i;
	}
	return -1;
};



})

});
});