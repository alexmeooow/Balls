function Ball(options){
	this._init(options);
}
Ball.prototype = {
	constructor:Ball,
	_init:function(options){
		options = options || {},
		this.x = options.x || 0;
		this.y = options.y || 0;
		this.radius = options.radius || 0;
		this.startAngle = options.startAngle || 0;
		this.endAngle = options.endAngle || 2*Math.PI;
		this.anticlockwise = options.anticlockwise || false;
		this.strokeStyle = options.strokeStyle;
		this.fillStyle = options.fillStyle || "red";
		this.lineWidth = options.lineWidth || 0;
		this.speed = options.speed || 1;
	},
	//绘制球
	render:function(ctx){
		ctx.beginPath();//开始路径
		ctx.fillStyle = this.fillStyle;//实心的颜色
		ctx.strokeStyle = this.strokeStyle;//外框空心的边框
		ctx.lineWidth = this.lineWidth;//外框线的宽度
		//画圆
		ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise);
		//填充色
		ctx.fill();
		//边线色
		if (this.lineWidth !== 0) {
			ctx.stroke();
		};
		
	},
	//设置球的移动轨迹
	update:function(){
		this.x += this.speed;
		//半径不停减小
		this.radius -= 2;
		//半径小于0时,要将该小球从内存移除
		if (this.radius <= 0) {
			//获取到半径小于等于0的那个小球的坐标
			var index = balls.indexOf(this);//这个balls是全局变量,所以在任何方法中都可以调用的到他
			//再根据坐标在小球数组中删除这个小球
			balls.splice(index,1);
		};
	}
	
}