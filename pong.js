var x1= 250;
var y1= 200;
var dx1= null;
var dy1= null;


var y2= 200;
var dy2= 50;

var y3= 200;
//var dy3= 2;



const canvas = document.getElementById('pong');
const context = canvas.getContext('2d');

window.addEventListener("keyup",controls);
	

//Main 
function init(){
	context.clearRect(0,0,500,500);
	drawCaixa();
	drawBola();
	drawPlayer1();
	drawPlayer2();
	regras();
}

function drawCaixa(){
	//Toda a caixa a preto
	context.fillStyle="#000000";
	context.fillRect(0,0, 500, 500);

}

// x+=dx e y+dy indicam onde a bola esta e quanto se vai mover de acordo com as var criadas
function drawBola(){
	
	//inicio da bola
	context.beginPath();
	context.fillStyle="#ffffff";
	context.arc(x1,y1,20,0,Math.PI*2,true);
	context.closePath();
	context.fill();
	//Reset + bater topo/bot
	if(y1<=15 || y1>=485) dy1=-dy1;
	//if(x1<=0 || x1>=500){
	//x1= 250;
	//y1= 200;
	//}
	
	//dx1=-dx1;
	x1+=dx1;
	y1+=dy1;
	

}

function drawPlayer1(){
	
	context.beginPath()
	context.fillStyle="#ffffff";
	context.fillRect(0, y2, 25, 100);
	context.fill();
	//if(y2<0 || y2>400) dy2=-dy2;
	//y2+=dy2;

		if (y2 < 0){
		y2=0;
		} else if (y2 >400){
		y2=400;
		} else {
			y2=y2;
		}
}

function drawPlayer2(){
	context.beginPath()
	context.fillStyle="#ffffff";
	context.fillRect(475 , y3, 25, 100);
	context.fill();
	//if(y3<0 || y3>400) dy3=-dy3;
	//y3+=dy3;
	if (y3 <0){
		y3=0;
	} else if (y3 >400){
		y3=400;
	} else {
		y3=y3;
	}
	
}

//Função de controlo do Player1
function controls(key){

	if(key.keyCode == "38"){
		y2-=dy2;
	} else if (key.keyCode == "40"){
		y2+=dy2;
	} else {
		y2=y2;
	}
	
	if(key.keyCode == "13"){
		dx1=3;
		dy1=3;
		y3=y1;
		x1=250;
		y1=200;
	}
}

function regras(){
	//Player 1 - Regras
	if(y1<y2+100 && y1>y2 && x1<=25) dx1=-dx1;	
	//Aumentar speed
	if(y1<=y2+100 && y1>y2+75 && x1===25) dy1=((2/3)*(dy1));
	if(y1<=y2+75 && y1>y2+40 && x1===25) dy1=3;
	if(y1<=y2+40 && y1>=y2 && x1===25) dy1=((2/3)*(-dy1)); 	
	//Player 2 - Regras
	if(y1<y3+100 && y1>y3 && x1===475) dx1=-dx1;
	if(y1<y3+100 && y1>y3+50 && x1===25) dy1=-dy1;
	if(y1<y3+50 && y1>y3 && x1===25) dy1=dy1;
	
	y3=(y1-50);
		if(x1<=0 || x1>=500){
		x1=250;
		y1=200;
		y2=y1;
		dx1=null;
		dy1=null;
		y3=null;
		
	}
}


setInterval(init,10);
