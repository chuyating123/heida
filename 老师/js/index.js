require(['./leaf'],function(Leaf){
	var oContainer=document.getElementById('container');
	var winWidth=document.documentElement.clientWidth;

	//给leaf.js 传递实例化的参数
	//实例化叶子 四个 每个都不一样 叶子样子不同、叶子定位不同、下落速度
	//宽度 left距离 div Object
	for(var i=0;i<4;i++){
		//生成叶子的宽度
		var iWidth=50+parseInt(Math.random()*51);
		var leaf=new Leaf({
			width:iWidth,
			left:parseInt(Math.random()*(winWidth-iWidth)),
			container:oContainer,
		});

		//console.log(leaf);
		leaf.fall();
	}
	
})