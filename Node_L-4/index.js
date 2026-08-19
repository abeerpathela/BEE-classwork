const form = document.getElementById("mainform");

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const userId = document.getElementById("userId").value;

    const response = await fetch("http://localhost:3000/", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            userId: userId
        })
    });

    const data = await response.json();

    if (response.ok) {
        alert(`User found: ${data.name}`);
    } else {
        alert(data.message);
    }

});