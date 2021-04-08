const target = document.getElementById("target");
const imgs = document.querySelectorAll('.imgs img');

const opacity = 0.3;

imgs.forEach(img => {
    img.addEventListener("click", changeImg);
});

function changeImg(e) {
    // 实现更换图片地址
    target.src = e.target.src;

    // 为被点击的img添加动画
    target.classList.add("fade-in");

    // 隔一段时间删除fade-in动画
    setTimeout(() => target.classList.remove("fade-in"), 500);

    target.style.opacity = opacity;
}