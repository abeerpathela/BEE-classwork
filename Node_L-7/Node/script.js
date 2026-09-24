//interview question 
//what is preflight request?

// alert("hello")
// const submit = document.getElementById('submit');
// const username = document.getElementById('username');
// const password = document.getElementById('password')
const form = document.getElementById('form')
//GET REQUEST
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const data = new FormData(form)
//     const formdata=Object.fromEntries(data);
//     const queryString=new URLSearchParams(data).toString();
//     fetch(`http://localhost:2211/?${queryString}`)
//     .then((res)=>res.text())
//     .then(data=>{
//         console.log(data)
//     })
//     .catch(err=>{
//         console.log(err)
//     })
//     console.log(queryString)
//     console.log(formdata)
// })
// submit.addEventListener('click',(e)=>{
//     e.preventDefault()
//     let name = username.value
//     let pass = password.value;
//     console.log(name);
//     console.log(pass);
// })


//POST REQUEST
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const data = new FormData(form)
    const formdata=Object.fromEntries(data);
    fetch("http://localhost:2211",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(formdata)
    }).then(res=> res.text())
    .then(data=>{
        console.log(data)
    })
    .catch(err=>{
        console.log(err)
    })
})