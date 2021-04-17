// 用generator 做出自增的效果
function* createId() {
    let index = 0;
    while (1) {
        yield index++;
    }
}

let incre = createId();

for (let index = 0; index < 100; index++) {
    console.log(incre.next());
}