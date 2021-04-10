"use strict";

let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartDOM = document.querySelector(".cart");
const addToCartButtonsDOM = document.querySelectorAll('[data-action ="ADD_TO_CART"]');

// 如果localStorge有东西，则展示购物车内容
if (cart.length > 0) {
    cart.forEach(cartItem => {
        const product = cartItem;
        cartDOM.insertAdjacentHTML("beforeend", `
            <div class="cart-item">
            <img class="cart-item-image" src="${product.image}" alt="${product.name}">
            <h3 class="cart-item-name">${product.name}</h3>
            <h3 class="cart-item-price">${product.price}</h3>
            <button class="btn btn-primary btn-small btn-danger" data-action="DECREASE_ITEM">
            &minus;
            </button>
            <h3 class="cart-item-quantity">${product.quantity}</h3>
            <button class="btn btn-primary btn-small" data-action="INCREASE_ITEM">
            &plus;
            </button>
            <button class="btn btn-primary btn-small btn-danger" data-action="REMOVE_ITEM">
            &times;
            </button>
            </div>`
        );
        addToCartButtonsDOM.forEach(addToCartButtonDOM => {
            const productDOM = item.parentNode;

            // 未完成
        })
    })
}

// 遍历添加点击事件
addToCartButtonsDOM.forEach(item => {
    item.addEventListener("click", () => {
        const productDOM = item.parentNode;
        const product = {
            image: productDOM.querySelector(".product-image").getAttribute("src"),
            name: productDOM.querySelector(".product-name").innerText,
            price: productDOM.querySelector(".product-price").innerText,
            quantity:1
        };
        // 将商品加入购物车数组
        cart.push(product);

        // 实现本地存储
        localStorage.setItem("cart", JSON.stringify(cart));

        item.innerText = '已加入';
        item.disabled = true;

        // 拿到商品容器
        
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
            <button class="btn btn-primary btn-small btn-danger" data-action="DECREASE_ITEM">
            &minus;
            </button>
            <h3 class="cart-item-quantity">${product.quantity}</h3>
            <button class="btn btn-primary btn-small" data-action="INCREASE_ITEM">
            &plus;
            </button>
            <button class="btn btn-primary btn-small btn-danger" data-action="REMOVE_ITEM">
            &times;
            </button>
            </div>
            `);
        }
        const cartItemsDOM = cartDOM.querySelectorAll(".cart-item");

        console.log(cartItemsDOM);
        cartItemsDOM.forEach(cartItemDOM => {
            if (cartItemDOM.querySelector(".cart-item-name").innerText === product.name) {
                // 增加按钮
                cartItemDOM.querySelector("[data-action='INCREASE_ITEM']")
                    .addEventListener("click", () => {
                        cart.forEach(cartItem => {
                            console.log(cartItem);
                            if (cartItem.name === product.name) {
                                cartItemDOM.querySelector(".cart-item-quantity").innerText = ++cartItem.quantity;
                                cartItemDOM
                                .querySelector("[data-action='DECREASE_ITEM']").classList
                                    .remove("btn-danger");
                                // 实现本地存储
                                localStorage.setItem("cart", JSON.stringify(cart));
                            }
                        })

                    })
                    
                // 减少按钮
                cartItemDOM.querySelector("[data-action='DECREASE_ITEM']")
                .addEventListener("click", () => {
                    cart.forEach(cartItem => {
                        console.log(cartItem);
                        if (cartItem.name === product.name) {
                            cartItemDOM.querySelector(".cart-item-quantity").innerText = --cartItem.quantity;
                            // 实现本地存储
                            localStorage.setItem("cart", JSON.stringify(cart));
                            if (product.quantity < 2 && product.quantity > 0) {
                                cartItemDOM.querySelector("[data-action='DECREASE_ITEM']").classList.add("btn-danger");
                            } else if (product.quantity <= 0) {
                                setTimeout(cartItemDOM.style.display = "none", 700);
                                cart = cart.filter(cartItem => cartItem.name !== product.name);
                                item.innerText = "加入购物车";
                                item.disabled = false;
                            }
                        }
                    })

                })
                
                // 删除按钮
                cartItemDOM.querySelector("[data-action='REMOVE_ITEM']")
                .addEventListener("click", () => {
                    cart.forEach(cartItem => {
                        cartItemDOM.style.display = "none";
                        item.innerText = "加入购物车";
                        item.disabled = false;

                        cart = cart.filter(cartItem => cartItem.name !== product.name);

                        // 实现本地存储
                        localStorage.setItem("cart", JSON.stringify(cart));
                    })

                })
            }
        })


    })
    
});

