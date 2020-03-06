define(function(require,exports,module){
    function Leaf(options){
        this.width=options.width,
        this.left=options.left,
        this.oimg=new Image(),
        this.oimg.src='img/'+(parseInt(Math.random()*4)+1)+'.png',
        this.oimg.width=this.width,
        this.oimg.style.left=this.left+"px",
        options.container.appendChild(this.oImg);
    }
    Leaf.prototype.fall=function(){
        setInterval(function(){
        this.oimg.style.top=this.oimg.offsetwidth+5+"px"
        },Math.random()*500)
    }
    module.exports=Leaf;
})