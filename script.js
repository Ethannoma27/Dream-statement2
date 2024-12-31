// 区块链魔方旋转的基本结构
let cube = document.getElementById("blockchain-cube");

// 每隔一定时间改变旋转角度
setInterval(function () {
    let randomX = Math.floor(Math.random() * 360);
    let randomY = Math.floor(Math.random() * 360);
    cube.style.transform = `rotateX(${randomX}deg) rotateY(${randomY}deg)`;
}, 1000);
