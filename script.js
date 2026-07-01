const canvas = document.getElementById("chart");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let points = [];
for (let i = 0; i < 60; i++) {
  points.push({
    x: i * 30,
    y: canvas.height - Math.random() * 200
  });
}

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.strokeStyle = "#00ff99";
  ctx.lineWidth = 3;
  ctx.beginPath();

  points.forEach((p, i) => {
    p.y -= Math.random() * 2;
    if (i === 0) ctx.moveTo(p.x, p.y);
    else ctx.lineTo(p.x, p.y);
  });

  ctx.stroke();
  requestAnimationFrame(draw);
}
draw();

function copy() {
  navigator.clipboard.writeText("0xPEPEBULLCONTRACTADDRESS");
  document.getElementById("msg").innerText = "Contract copied!";
}
