// console.log(Document) This will print the whole document object 

console.log("JS File Working")

const products=[
    {
        productId:"101",
        productName:"Samosa",
        price:10
    },
    {
        productId:"102",
        productName:"Burger",
        price:20
    },
    {
        productId:"103",
        productName:"Pizza",
        price:20
    },
    {
        productId:"104",
        productName:"Cold Drink",
        price:20
    }
];

const productFilterInput=document.getElementById("product-filter"); // It will return NULL if it does not found this element 
const productPriceInput=document.getElementById("product-price"); // It will return NULL if it does not found this element 
const productQuantityInput=document.getElementById("product-qty"); // It will return NULL if it does not found this element 
const addToCartButton=document.getElementById("addtocart");

productFilterInput.addEventListener("keydown",(event)=>{
    if(event.key=="Enter" && event.target.value!==" "){
        // console.log("Function Working");
        // console.log(event.target.value);
        getData(event.target.value);
    }
})

function getData(val){
    const product=products.filter((data)=>data.productId===val); //This will return the array of the filtered products 
    console.log(product);
}



