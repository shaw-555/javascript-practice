// 第一步 找到相关节点
const search = document.getElementById("search"),
    submit = document.getElementById("submit"),
    random = document.getElementById("random"),
    mealsEl = document.getElementById("meals"),
    resultHeading = document.getElementById("result-heading"),
    single_mealEl = document.getElementById("single-meal");

// 第三部 创建searchMeal 函数
function searchMeal(e) {
    e.preventDefault();// 阻止默认事件
    // 清楚single meal 的内容
    single_mealEl.innerHTML = "";// 清除单个食谱的显示

    // 获得search 输入框的值
    const term = search.value;
    
    // 检查是否为空
    if(term.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        .then(res => res.json())
        .then(data => { 
                console.log(data)
                resultHeading.innerHTML = `<h2>${term} 的查询结果为：</h2>`;
            if( data.meals === null ){
                resultHeading.innerHTML = `<p>没有查询到相关结果，请重新输入</p>`
            }else {
                mealsEl.innerHTML = data.meals.map( meal => `
                    <div class="meal">
                        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                        <div class="meal-info" data-mealId= "${meal.idMeal}" >
                            <h3>${meal.strMeal}</h3>
                        </div>
                    </div>
                `)
                .join("");
            }
        });
    
        search.value = "";
    }else {
        alert("请输入搜索的内")
    }
}
// 第四部 getMealById 函数
function getMealById(mealID){
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then( res => res.json())
    .then(data => {
        
        const meal = data.meals[0];
        addMealToDOM(meal);
    });
}

// 第五步 设置 addMealToDOM
function addMealToDOM(meal) {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(
          `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
        );
      } else {
        break;
      }
    }
    single_mealEl.innerHTML = `
      <div class="single-meal">
        <h1>${meal.strMeal}</h1>
        <img src="${meal.strMealThumb}" alt="${meal.strmeal}">
        <div class="single-meal-info">
            ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ""}
            ${meal.strArea ? `<p>${meal.strArea}</p>` : ""}
        </div>
        <div class="main">
            <p>${meal.strInstructions}</p>
            <h2>Ingredients</h2>
        </div>
        <ul>
            ${ingredients.map(ing => `<li>${ing}</li>`).join("")}
        <ul>
      </div>
    `
}

// 第六步
function getRandomMeal(){
    mealsEl.innerHTML="";
    resultHeading.innerHTML="";

    // 从random页那随机数据即可
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(res => res.json())
    .then(data => {
        const meal = data.meals[0];
        addMealToDOM(meal);
    })
  
}

// 第二部 设置事件监听
submit.addEventListener("submit", searchMeal);
random.addEventListener("click", getRandomMeal);

mealsEl.addEventListener('click', e => {
    const mealInfo = e.path.find(item => {
        if(item.classList){
            return item.classList.contains('meal-info');
        }else {
            return false;
        }
    })
    console.log(mealInfo);
    if(mealInfo){
        const mealID = mealInfo.getAttribute("data-mealid");
        getMealById(mealID);
    }
});