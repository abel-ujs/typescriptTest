var cats = require("./service.js")
var $ = require("jquery");
console.log(cats);
cats.map(function(t){
	console.log(t);
})

$.ajax({
	url:'webpack.config.js',
	success:function(){
		console.log('success')
	},
	error:function(){
		console.log('error')
	}
})

