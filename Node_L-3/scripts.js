const form = document.getElementById("mainform");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const formData = new FormData(form);
    const data= Object.fromEntries(formData);
    const queryString = new URLSearchParams(data).toString();
    // console.log(data);
    // console.log(queryString);
    fetch(
        `http://localhost:3000/?${queryString}`
    ).then(
        (res)=> res.text()
    ).then(
        (data)=> console.log(data)
    ).catch(
        (err) => console.log(err)
    );
})
