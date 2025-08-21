import * as utools from './utls'
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createMouseListenerTrigger();
}

function createMouseListenerTrigger() {
    let isDrawing = false;
    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
    })
    canvas.addEventListener('mousemove', (e) => {
        if (isDrawing) {
            createPen(e.clientX, e.clientY);
        }
    })
    canvas.addEventListener('mouseup', (e) => {
        isDrawing = false;
    })
}

function createPen(x, y) {
    console.log(utools)
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.quadraticCurveTo(x+2, y, x, y);
    ctx.fillStyle = '#000000';
    ctx.fill();
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
}

resizeCanvas();
