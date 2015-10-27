console.log('DOM script linked')


var moreOpacity = $("button").eq(1);
moreOpacity.click(function(e){
	$(".flip-container").animate({
		opacity: .5

	}, 500, function(){
		console.log('done')
	})
})

var lessOpacity = $("button").eq(2);
lessOpacity.click(function(e){
	$(".flip-container").animate({
		opacity: 1
	}, 500, function(){
		console.log('finished')
	})
})

$(".mover").click(function(e){
	$(this).animate({
		left: "+=100px"
	}, 500, function(){
		console.log('moved!')
	})
})






