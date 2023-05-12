interface Quiz{
    name:string,
    type:string
}

interface Course{
    name:string,
    author:string,
    subject:string,
}

class Sellable<T>{
    public cart : T[] = [];
    addToCart(item:T){
        this.cart.push(item);
    }
    getCart(){
        return this.cart;
    }
}

let book = new Sellable<Quiz>();
book.addToCart({name:"book1",type:"standard"});
book.addToCart({name:"book2",type:"book"});
console.log(book.getCart());
