"use strict";

let cart = [];
const cartDOM = document.querySelector(".cart");
const addToCartButtonsDOM = document.querySelectorAll('[data-action ="ADD_TO_CART"]');

// 遍历添加点击事件
addToCartButtonsDOM.forEach(item => {
    item.addEventListener("click", () => {
        const productDOM = item.parentNode;
        const product = {
            image: productDOM.querySelector(".product-image").getAttribute("src"),
            name: productDOM.querySelector(".product-name").innerText,
            price: productDOM.querySelector(".product-price").innerText
        };
        cart.push(product);

        item.innerText = '已加入';

        // 处理购物车里面的数据
        const isIncart = cart.filter(cartItem => cartItem.name === product.name).length > 0;
        console.log(isIncart);
        // 判断
        if (isIncart) {
            cartDOM.insertAdjacentHTML("beforeend", `
                <div class="cart-item">
                    <img class="cart-item-image" src="${product.image}" alt="${product.name}">
                    <h3 class="cart-item-name">${product.name}</h3>
                    <h3 class="cart-item-price">${product.price}</h3>
                </div>
            `);
        }
    })

});