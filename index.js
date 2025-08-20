// 获取canvas元素和上下文
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
// 设置Canvas为全屏尺寸
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
function createPath(x, y) {
    const originPoint = {
        x,
        y,
    }
    return function(_x, _y) {
        ctx.beginPath();
        ctx.moveTo(_x, _y);
        ctx.quadraticCurveTo(_x+2, _y, _x+2, _y);
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = randomIntFromInterval(1,3);
        ctx.stroke();
    }
}
document.addEventListener('mousedown', (e) => {
    isDrawing = true;
});

document.addEventListener('mouseup', (e) => {
    isDrawing = false;
})

document.addEventListener('mousemove', (e) => {
    if (isDrawing) {
    function loopFnc(x, y) {
        const originPoint = createPath(e.clientX, e.clientY);
        originPoint(x, y);
        requestAnimationFrame(() => {
            loopFnc(x + randomIntFromInterval(-2, 2), y + randomIntFromInterval(-2, 2));
        })
    }
    loopFnc(e.clientX, e.clientY);
  }
})

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

document.addEventListener('touchstart', (e) => {
    isDrawing = true;
})

document.addEventListener('touchend', (e) => {
    isDrawing = false;
})

document.addEventListener('touchcancel', (e) => {
    isDrawing = false;
})

document.addEventListener('touchmove', (e) => {
    if (isDrawing) {
        const touch = e.touches[0];
        loopFnc(touch.clientX, touch.clientY);
    }
})