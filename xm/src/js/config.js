require.config({
	baseUrl : "/",
	paths : { // 短名称
		jquery : "lib/jquery/jquery-1.12.4.min",
		load : "js/loadHeaderAndFooter",
		bootstrap:"lib/jquery-plugins/bootstrap",
		city:"lib/jquery-plugins/city-picker",
		citydata:"lib/jquery-plugins/city-picker.data",
		main:"lib/jquery-plugins/main",
		template : "lib/artTemplate/template-web",
		cookie : "lib/jquery-plugins/jquery.cookie",
		xm_carousel: "lib/jquery-plugins/jquery.xm_carousel",
		fly : "lib/jquery-plugins/jquery.fly.min",
		zoom : "lib/jquery-plugins/jquery.elevateZoom-3.0.8.min",
	},
	shim : {
		bootstrap : {
			deps : ["jquery"]
		},
		citydata : {
			deps : ["jquery","bootstrap"]
		},
		city : {
			deps : ["citydata","jquery","bootstrap"]
		},
		xm_carousel : {
			deps : ["jquery"]
		},
		main : {
			deps : ["citydata","city","jquery","bootstrap"]
		},
		fly : {
			deps : ["jquery"]
		},
		zoom : {
			deps : ["jquery"]
		}
	}
});