const canvas=document.createElement("canvas");
document.body.appendChild(canvas);
const ctx=canvas.getContext("2d");

canvas.width=innerWidth;
canvas.height=innerHeight;

let stars=[];
for(let i=0;i<120;i++){
    stars.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*1.5
    });
}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="white";
    stars.forEach(s=>{
        ctx.beginPath();
        ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
        ctx.fill();
    });

    /* constelación corazón */
    ctx.strokeStyle="#ff2e63";
    ctx.lineWidth=1.5;
    ctx.beginPath();
    ctx.moveTo(canvas.width/2-40, canvas.height/2);
    ctx.lineTo(canvas.width/2, canvas.height/2-40);
    ctx.lineTo(canvas.width/2+40, canvas.height/2);
    ctx.lineTo(canvas.width/2, canvas.height/2+40);
    ctx.closePath();
    ctx.stroke();

    requestAnimationFrame(draw);
}
draw();
