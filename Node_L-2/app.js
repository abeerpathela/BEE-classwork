const http = require('http');//hmne http module ko import kiya hai jo ki node.js ka built-in module hai. Ye module humein http server aur client banane ki suvidha deta hai.
const fs = require('fs');//ye module humein file system ke saath kaam karne ki suvidha deta hai. Iska use hum file read, write, delete, rename etc. karne ke liye karte hain.
const path = require('path');//ye module humein file aur directory ke path ke saath kaam karne ki suvidha deta hai. Iska use hum file aur directory ke path ko manipulate karne ke liye karte hain.

const server = http.createServer((req, res) => {
    console.log(req.url); //ye humein request ka url batata hai.
    if(req.url==='/' && req.method==='GET'){ //ye check karta hai ki request ka url '/' hai aur method 'GET' hai.
        fs.readFile('./index.html', (err, data) => { //ye readFile method file ko read karta hai. Isme pehla argument file ka path hai aur dusra argument callback function hai jo file read hone ke baad call hota hai.
            if(err){
                res.writeHead(500, {'Content-Type': 'text/html'}); //ye writeHead method response ka status code aur headers set karta hai. Yaha 404 ka matlab hai ki file nahi mili.
                res.write('<h1>500 Internal Server Error</h1>'); //ye response me html content bhejta hai.
                res.end(); //ye response ko end karta hai.
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            }
        });
    }
    else if(req.url==='/style.css' && req.method==='GET'){ //ye check karta hai ki request ka url '/style.css' hai aur method 'GET' hai.
        fs.readFile('./style.css', (err, data) => {
            if(err){
                res.writeHead(500, {'Content-Type': 'text/html'}); //ye writeHead method response ka status code aur headers set karta hai. Yaha 404 ka matlab hai ki file nahi mili.
                res.write('<h1>500 Internal Server Error</h1>'); //ye response me html content bhejta hai.
                res.end(); //ye response ko end karta hai.
            } else {
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.write(data);
                res.end();
            }
        });
    }
    
    else if(req.url==='/abeer' && req.method==='GET'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('./index.html');
        res.end();
    }

    //send json file---

    // else if(req.url==='/akshit' && req.method==='GET'){
    //     res.writeHead(200,{'Content-Type':'application/json'});
    //     res.write('{"message": "Akshit Page"}');
    //     res.end();
    // }
    //  else{
    //     res.writeHead(404, {'Content-Type': 'text/html'});
    //     res.write('<h1>404 Not Found</h1>');
    //     res.end();
    // }

    
});

//koi application 3000 port pe run ho rahi hai to ye error dega ki port already in use.
server.listen(3000, () => {
    console.log('Server is running on port 3000');
})

// server.on('connection', (socket) => {
//     console.log(socket.remoteAddress);
//     console.log('New connection established.');
// })

// server.on('request', (req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});//we write 200 because it is the status code for success and text/plain because we are sending plain text.
//     res.end('Hello World');
// })