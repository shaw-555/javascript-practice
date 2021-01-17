// 集合的基本操作
// 定义基本集合
const a = new Set([1,1,2,3,3]);
const b = new Set([3,4,5,2])

// 定义union方法

function union(setA,setB){
    let arr = [...setB];
    // console.log(arr)
    for(let i =0 ;i<arr.length;i++){
        setA.add(arr[i]);
    }
    // console.log(setA);
    return setA;
}

// let c =union(a,b);

console.log(a);
console.log(b);
// console.log(c);

// intersection
function intersection(setA,setB){

    for( const ele of setA){
        if(!setB.has(ele)){
            setA.delete(ele);
        }
    }
    return setA;
}

// console.log(intersection(a,b));

// difference A to B
function differenceAtoB(setA,setB){
    for(const ele of setB){
        if(setA.has(ele)){
            setA.delete(ele);
        }
    }
    return setA;
}

// console.log(differenceAtoB(a,b));


function differenceBtoA(setA,setB){
    for(const ele of setA){
        if(setB.has(ele)){
            setB.delete(ele);
        }
    }
    return setB;
}
console.log(differenceBtoA(a,b));