// const form = document.getElementById("mainform");

// form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const formData = new FormData(form);

//     const data = Object.fromEntries(formData.entries());

//     fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data)
//     })
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// });

// console.log(fetch("https://jsonplaceholder.typicode.com/posts",
// {
//     method:"POST",
//     headers:{
//         "Content-Type":"application/json"
//     },
//     body: JSON.stringify({
//         title: "Kal ho na ho",
//         body: "Movie Song",
//         userId:"1234"
//     })
// }

// ).then((res)=> res.json()).then((data)=> console.log(data)).catch((err)=>console.log(err)));

const inputBox=document.getElementById("searchBar");
const searchButton=document.getElementById("searchButton");

// const API_KEY=GENERATED_KEY_HERE_TO_BE_PLACED;





function updateUI(data) {
    document.getElementById("cityName").innerText = data.name;
    document.getElementById("countrycode").innerText = `, ${data.sys.country}`;
    document.getElementById("wdesc").innerText = data.weather[0].description;
    document.getElementById("temp").innerText = data.main.temp;
    document.getElementById("humid").innerText = data.main.humidity;
    document.getElementById("wspeed").innerText = data.wind.speed;
}

searchButton.addEventListener("click",async ()=>{
    let cityName=inputBox.value;
    try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`);
        if(!response.ok){
            throw new Error("HTTP Network Error");
        }
        const data = await response.json();
        updateUI(data);
        document.querySelector(".hidden").style.display="block";
    }
    catch(err){
        console.log(err);
    }
});


