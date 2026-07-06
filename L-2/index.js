// console.log(Document) This will print the whole document object 

console.count("JS File Working");

let cart = JSON.parse(localStorage.getItem("MyCart")) || [];

console.log("JS File Working")

// let cart=[];

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
const productDescription=document.getElementById("product-description");

productFilterInput.addEventListener("keydown",(event)=>{
    if(event.key=="Enter" && event.target.value!==" "){
        // console.log("Function Working");
        // console.log(event.target.value);
        getData(event.target.value);
    }
})

function getData(val){
    const product=products.filter((data)=>data.productId===val); //This will return the array of the filtered products
    if(product.length<=0){
        alert("Invalid Product ID \n Try Again with correct code!");
        return;
    } 
    else{
        productFilterInput.value=product[0].productName;
        productPriceInput.value=product[0].price;    
        productQuantityInput.focus();
    }
}

function saveCartToLocalStorage(){
    localStorage.setItem("MyCart",JSON.stringify(cart));
}


function addNewRow(a,b,c){
     console.count("addNewRow called");

    // let tr=document.createElement('tr');
    // let td1=document.createElement('td');
    // td1.innerText=a;
    // let td2=document.createElement('td');
    // td2.innerText=b;
    // let td3=document.createElement('td');
    // td3.innerText=c;
    // tr.append(td1);
    // tr.append(td2);
    // tr.append(td3);
    // productDescription.appendChild(tr);

    const row=productDescription.insertRow();
    const uniqueid=Date.now().toString();
    row.setAttribute("data-id",uniqueid);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4=row.insertCell(3);
    const cell5=row.insertCell(4);


    cell1.textContent=a;
    cell2.textContent=b;
    cell3.textContent=c;
    cell4.textContent=b*c;
    cell5.innerHTML=`<button id="dlt-btn" > &#128465;&#65039; </button>`;

    const item={
        id:uniqueid,
        ProductName:a,
        ProductPrice:b,
        ProductQuantity:c,
        ProductTotal:b*c
    }

    cart.push(item);
    saveCartToLocalStorage();
    console.log(cart);
}

function renderData(){
    cart.forEach((item)=>{
        const row=productDescription.insertRow();
        row.setAttribute("id", item.Id);

        const newRow = productDescription.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);


        cell1.textContent=item.productname;
        cell2.textContent=item.productPrice;
        cell3.textContent=item.productQuantity;
        cell4.textContent=item.Total;
        cell5.innerHTML = `<button class="dlt-btn" aria-label="Delete">&#x2715;</button>`;

})
}

addToCartButton.addEventListener("click",(event)=>{
     event.preventDefault();
       console.count("Button Click");
    if(productFilterInput.value==="" || productPriceInput.value==="" || productQuantityInput.value===""){
        alert("Fill all the input fields");
        return;
    }
    // create table 
    addNewRow(productFilterInput.value,productPriceInput.value,productQuantityInput.value);

    productFilterInput.value="";productPriceInput.value="";productQuantityInput.value="";
})

productDescription.addEventListener("click",(event)=>{
    const button=event.target.closest("#dlt-btn");
    if(button){
        const row=button.closest("tr");
        const rowId=row.getAttribute("data-id");
        cart=cart.filter(data => data.id !== rowId);
        row.remove();
        saveCartToLocalStorage();
    }
    console.log(cart);
})


document.addEventListener("DOMContentLoaded",()=>{
    renderData();
    productFilterInput.focus();
})
