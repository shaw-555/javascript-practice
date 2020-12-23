let book ={};

Object.defineProperties(book,{
        year_:{
            value:2017
        },
        edition:{
            value:1
        },
        year:{
            get() {
                return this.year_
        },
        set (newValue){
            if (newValue > 2012) {
                this.year_ = newValue;
                this.edition += newValue - 2017
            }
        }
    }
})
console.log(book);
console.log(book.edition);

let descriptor = Object.getOwnPropertyDescriptor(book,"year_");
console.log(descriptor.value);
console.log(descriptor.configurable);
console.log(descriptor.writable);
console.log(descriptor.enumerable);

console.log(Object.getOwnPropertyDescriptors(book))