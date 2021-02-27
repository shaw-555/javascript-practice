// 获取节点
const postsContainer = document.getElementById("posts-container");
const loading = document.querySelector(".loader");
const filter = document.getElementById("filter");

let limit = 5;
let page = 1;

// fetch posts from API
async function getPosts() {
    const res = await fetch(
        `http://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    );

    const data = await res.json();
    return data;
}

function showLoading(){
    loading.classList.add("show");
    setTimeout(()=> {
        loading.classList.remove("show");
        setTimeout(() => {
            page++;
            showPosts()
        })
    },1000);
}

// 在 DOM 展示 posts
async function showPosts() {
    const posts = await getPosts();

    posts.forEach(
        (e) => {
            let div = document.createElement('div');
            div.classList.add("post");


            div.innerText = e.id;
            div.innerHTML = `<div class="number">${e.id}</div>
            <div class="post-info">
                <h2 class="post-title">${e.title}</h2>
                <p class="post-body">${e.body}</p>
            </div>`;
            postsContainer.appendChild(div);
        }
    );
    return posts;
}
function filterPost(e){
    const term = e.target.value.toUpperCase();
    console.log(term);

    const posts = document.querySelectorAll('.post');
    console.log(posts);

    posts.forEach((post) => {
        console.log(post);
        const title = post.querySelector('.post-title').innerText.toUpperCase();
        const body = post.querySelector('.post-body').innerText.toUpperCase();
    
        if(title.indexOf(term) > -1 || body.indexOf(term) > -1){
            post.style.display = 'flex';
        }else{
            post.style.display = 'none';
        }
    })
}

// 初始化页面
 showPosts();

window.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 5) {
        showLoading();
    }
});

filter.addEventListener("input",filterPost);