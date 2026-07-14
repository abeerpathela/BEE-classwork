const form = document.getElementById("mainform");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});

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

