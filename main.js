canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
ctx.beginPath(); 
ctx.strokeStyle="blue";
ctx.lineWidth=3;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=3;
ctx.arc(280,200,40,0,2*Math.PI);
ctx.stroke(); 
   
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=3;
ctx.arc(360,200,40,0,2*Math.PI);
ctx.stroke(); 
      
ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=3;
ctx.arc(240,260,40,0,2*Math.PI);
ctx.stroke(); 

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=3;
ctx.arc(320,260,40,0,2*Math.PI);
ctx.stroke(); 
   






function clear_area(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
}