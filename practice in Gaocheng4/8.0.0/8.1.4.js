let dest , src ,result;

dest = {};
src = { id : "src"};

result =Object.assign(dest,src);

console.log(result);

console.log( result === dest);
console.log( src === dest );

