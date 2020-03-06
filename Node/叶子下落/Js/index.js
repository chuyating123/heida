require('[./leaf]',function(Leaf){
    var ocontainer=document.getElementById('container');
    var oscreen=document.documentElement.clientWidth;
    for(var i=0;i<4;i++){
        var owidth=50+parseInt(Math.random()*50);
        var oleft=parseInt(Math.random()*(oscreen-owidth));
        var leaf=new Leaf({
            width:owidth,
            left:oleft,
            container:oContainer,
        });
        leaf.fall();
    }
})