"use strict";

let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartDOM = document.querySelector(".cart");
const addToCartButtonsDOM = document.querySelectorAll('[data-action ="ADD_TO_CART"]');

function insertItemToDOM(product) {
    cartDOM.insertAdjacentHTML("beforeend", `
        <div class="cart-item">
        <img class="cart-item-image" src="${product.image}" alt="${product.name}">
        <h3 class="cart-item-name">${product.name}</h3>
        <h3 class="cart-item-price">${product.price}</h3>
        <button class="btn btn-primary btn-small ${product.quantity === 1? "btn-danger" : ""}" data-action="DECREASE_ITEM">
        &minus;
        </button>
        <h3 class="cart-item-quantity">${product.quantity}</h3>
        <button class="btn btn-primary btn-small" data-action="INCREASE_ITEM">
        &plus;
        </button>
        <button class="btn btn-primary btn-small btn-danger" data-action="REMOVE_ITEM">
        &times;
        </button>
        </div>`);

    addCartFooter();
}

function handleActionButtons(addToCartButtonDOM, product) {
    addToCartButtonDOM.innerText = '已加入';
    addToCartButtonDOM.disabled = true;

    // 拿到商品容器
    const cartItemsDOM = cartDOM.querySelectorAll('.cart-item');
    cartItemsDOM.forEach(cartItemDOM => {
        if (
            cartItemDOM.querySelector('.cart-item-name').innerText === product.name
        ) {
            // 加号按钮
            cartItemDOM
                .querySelector('[data-action="INCREASE_ITEM"]')
                .addEventListener('click', () => {
                    increaseItem(product, cartItemDOM);
                });
            // 减号按钮
            cartItemDOM
                .querySelector('[data-action="DECREASE_ITEM"]')
                .addEventListener('click', () => {
                    decreaseItem(product, cartItemDOM, addToCartButtonDOM);
                });

            // 删除按钮
            cartItemDOM
                .querySelector('[data-action="REMOVE_ITEM"]')
                .addEventListener('click', () => {
                    removeItem(product, cartItemDOM, addToCartButtonDOM);
                });
        }
    });
}

// 如果localStorge有东西，则展示购物车内容
if (cart.length > 0) {
    cart.forEach(cartItem => {
        const product = cartItem;
        insertItemToDOM(product);
        addToCartButtonsDOM.forEach(addToCartButtonDOM => {
            const productDOM = addToCartButtonDOM.parentNode;

            // 判断当前商品在购物车中是否存在
            if (productDOM.querySelector(".product-name").innerText === product.name) {
                handleActionButtons(addToCartButtonDOM, product);
            }
        })
    })
}

// 遍历添加点击事件
addToCartButtonsDOM.forEach(addToCartButtonDOM => {
    addToCartButtonDOM.addEventListener("click", () => {
        const productDOM = addToCartButtonDOM.parentNode;
        const product = {
            image: productDOM.querySelector(".product-image").getAttribute("src"),
            name: productDOM.querySelector(".product-name").innerText,
            price: productDOM.querySelector(".product-price").innerText,
            quantity: 1
        };
        // 将商品加入购物车数组
        cart.push(product);

        // 实现本地存储
        saveCart()

        addToCartButtonDOM.innerText = '已加入';
        addToCartButtonDOM.disabled = true;

        // 拿到商品容器

        // 处理购物车里面的数据
        const isIncart = cart.filter(cartItem => cartItem.name === product.name).length > 0;

        // 判断
        if (isIncart) {
            insertItemToDOM(product);
        }
        const cartItemsDOM = cartDOM.querySelectorAll(".cart-item");

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
                                saveCart()
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
                                saveCart()
                                if (product.quantity < 2 && product.quantity > 0) {
                                    cartItemDOM.querySelector("[data-action='DECREASE_ITEM']").classList.add("btn-danger");
                                } else if (product.quantity <= 0) {
                                    setTimeout(cartItemDOM.style.display = "none", 700);
                                    cart = cart.filter(cartItem => cartItem.name !== product.name);
                                    addToCartButtonDOM.innerText = "加入购物车";
                                    addToCartButtonDOM.disabled = false;
                                }
                            }
                        })

                    })

                // 删除按钮
                cartItemDOM.querySelector("[data-action='REMOVE_ITEM']")
                    .addEventListener("click", () => {
                        cart.forEach(cartItem => {
                            cartItemDOM.style.display = "none";
                            addToCartButtonDOM.innerText = "加入购物车";
                            addToCartButtonDOM.disabled = false;

                            cart = cart.filter(cartItem => cartItem.name !== product.name);

                            // 实现本地存储
                            saveCart()
                        })

                    })
            }
        })


    })

});


function increaseItem(product, cartItemDOM) {
    cart.forEach(cartItem => {
        if (cartItem.name === product.name) {
            cartItemDOM.querySelector(
                '.cart-item-quantity'
            ).innerText = ++cartItem.quantity;

            cartItemDOM
                .querySelector('[data-action="DECREASE_ITEM"]')
                .classList.remove('btn-danger');
            // 本地存储
            saveCart();
        }
    });
}

function decreaseItem(product, cartItemDOM, addToCartButtonDOM) {
    cart.forEach(cartItem => {
        if (cartItem.name === product.name) {
            if (cartItem.quantity > 1) {
                cartItemDOM.querySelector(
                    '.cart-item-quantity'
                ).innerText = --cartItem.quantity;
                // 本地存储
                saveCart();
            } else {
                cartItemDOM.classList.add('cart-item-remove');
                // 删除dom元素
                setTimeout(() => cartItemDOM.remove(), 250);
                // 删除数组里的元素
                cart = cart.filter(cartItem => cartItem.name !== product.name);
                // 本地存储
                saveCart();

                addToCartButtonDOM.innerText = '加入购物车';
                addToCartButtonDOM.disabled = false;
            }

            if (cartItem.quantity === 1) {
                cartItemDOM
                    .querySelector('[data-action="DECREASE_ITEM"]')
                    .classList.add('btn-danger');
            }
        }
    });
}

function removeItem(product, cartItemDOM, addToCartButtonDOM) {
    cartItemDOM.classList.add('cart-item-remove');
    // 删除dom元素
    setTimeout(() => cartItemDOM.remove(), 250);
    // 删除数组里的元素
    cart = cart.filter(cartItem => cartItem.name !== product.name);

    // 本地存储
    saveCart();

    addToCartButtonDOM.innerText = '加入购物车';
    addToCartButtonDOM.disabled = false;
    console.log('length',cart.length);

    // 反调footer
    if (cart.length < 1) {
        document.querySelector(".cart-footer").remove();
    }
}

function addCartFooter() {
    if (document.querySelector(".cart-footer") === null) {
        cartDOM.insertAdjacentHTML("afterend", `
        <div class="cart-footer">
           <button class="btn btn-danger" data-action="CLEAR_CART">情况购物车</button>
           <button class="btn btn-primary" data-action="CHECKOUT">支付</button>
       </div>
   `);
        
        document.querySelector('[data-action="CLEAR_CART"]')
            .addEventListener("click", () => {
                clearCart();
            });
        
        document.querySelector('[data-action="CHECKOUT"]')
            .addEventListener("click", () => {
                checkout();
            });
    }
}

function clearCart() {
    if (document.querySelector('.cart') !== null) {
        [...document.querySelector('.cart').children].forEach(item => {
            item.classList.add("cart-item-remove");
            setTimeout(item.remove(), 250);
        });
        cart.length = 0;

        localStorage.removeItem("cart");

        if (cart.length < 1) {
            document.querySelector(".cart-footer").remove();
        }
        addToCartButtonsDOM.forEach(addToCartButtonDOM => {
            addToCartButtonDOM.innerText = "加入购物车";
            addToCartButtonDOM.disabled = false;
        })
    }
}

// 计算商品总价
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    countCartTotal();
}

function countCartTotal() {
    let countTotal = 0;
    cart.forEach(cartItem => {
        countTotal += cartItem.quantity * cartItem.price;
    });
    document.querySelector('[data-action="CHECKOUT"]').innerText = `支付￥ ${countTotal}`;
}