let cart=JSON.parse(localStorage.getItem("Mycart"))||[];
const products = [
    {productId: "101", productName: "Laptop", price: 60000},
    {productId: "102", productName: "Phone", price: 90000},
    {productId: "103", productName: "Tablet", price: 50000},
    {productId: "104", productName: "Watch", price: 10000}
]
const productFilterInput = document.getElementById("product-filter");//It will return null if the element is not found in the DOM
const productPriceInput = document.getElementById("product-price");
const productQuantityInput = document.getElementById("product-qty");
const addToCartButton = document.getElementById("addtocart");
const cartTableBody = document.getElementById("cartBody");
const totalItems=document.getElementById("totalItems");
const subTotal=document.getElementById("subTotal");
const gstAmount=document.getElementById("gstAmount");
const grandTotal=document.getElementById("grandTotal");


productFilterInput.addEventListener("keydown", (event)=>{
    if(event.key === "Enter" && event.target.value !== " "){
        //console.log("function called");
        //console.log(event.target.value);
        getData(event.target.value);
    }
}) 

function getData(value){
    const product = products.filter((data)=> data.productId === value);// This will return the array of the filtered data
    //console.log(product);
    if(product.length <= 0){
        window.alert("Product ID not found");
        //alert("Product not found");
        return;
    }else{
        productFilterInput.value = product[0].productName;
        productPriceInput.value = product[0].price;
        productQuantityInput.focus();
        return; 
    }
}

function saveCartToLocalStorage(){
    localStorage.setItem("Mycart", JSON.stringify(cart));
}

// This function will render the data from the cart array to the table
function renderData(){

    cartTableBody.innerHTML = "";

    cart.forEach((item)=>{

        const newRow = cartTableBody.insertRow();
        newRow.setAttribute("id", item.Id);

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);

        cell1.textContent = item.Name;
        cell2.textContent = item.Price;
        cell3.textContent = item.Quantity;
        cell4.textContent = item.Total;
        cell5.innerHTML = `<button class="delete-btn" aria-label="Delete">&#x2715;</button>`;
    });
}

function BillCalculator(){
    let st=0.0;
    let tax=0.0;

    totalItems.textContent=cart.length;
    cart.forEach(item=> st+= parseFloat(item.Total)); // Yeh objects ko ek ek karke utha raha hai aur agar koi value string mei aa rahi aa usko float mei change karlena 
    tax=0.18*st;
    subTotal.textContent=st.toFixed(2);
    gstAmount.textContent=tax.toFixed(2);
    grandTotal.textContent=(st+tax).toFixed(2);
}

function addNewRow(productName, productPrice, productQuantity){
    const newRow = cartTableBody.insertRow();
    const uniqueId = Date.now().toString();
    newRow.setAttribute("id", uniqueId);


    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);

    cell1.textContent = productName;
    cell2.textContent = productPrice;
    cell3.textContent = productQuantity;
    cell4.textContent = (productPrice * productQuantity).toFixed(2);
    cell5.innerHTML = `<button class="delete-btn" aria-label="Delete">&#x2715;</button>`;
    cartTableBody.appendChild(newRow);

    const items={
        Id: uniqueId,
        Name: productName,
        Price: productPrice,
        Quantity: productQuantity,
        Total: (productPrice * productQuantity).toFixed(2)
    }
    cart.push(items);
    BillCalculator();
    saveCartToLocalStorage();
}

addToCartButton.addEventListener("click", (event)=>{
    if(productFilterInput.value === "" || productPriceInput.value === "" || productQuantityInput.value === ""){
        window.alert("Please fill all the fields");
        return
    }
    addNewRow(productFilterInput.value, productPriceInput.value, productQuantityInput.value);

    productFilterInput.value = "";
    productPriceInput.value = "";
    productQuantityInput.value = "";
    productFilterInput.focus();
});

cartTableBody.addEventListener("click", (event)=>{
    const button=event.target.closest(".delete-btn");
    if(button){
        const row=button.closest("tr");
        const rowId=row.getAttribute("id");
        cart=cart.filter(data=>data.Id !== rowId);// This will remove the item from the cart array
        saveCartToLocalStorage();
        BillCalculator();
        row.remove();
    }
})

document.addEventListener("DOMContentLoaded", ()=>{
    renderData();
    BillCalculator();
    productfilterinput.focus();
})