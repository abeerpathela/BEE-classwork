import express, { response } from 'express';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();
const PORT = Number(process.env.PORT) ;
const app = express();

const users= [
    {
        userId: 1,
        username: "Admin"
    },
    {
        userId: 2,
        username: "Guest"
    },
    {
        userId: 1,
        username: "Student"
    }
];

app.get('/api/users',(request,response)=>{
    response.send(users);
})



app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
});

app.get('/',(request,response)=>{
    response.send("Express Server started");
})

const __dirname= import.meta.dirname;
console.log(__dirname);
app.use(express.static(__dirname));


app.get('/home',(request,response)=>{
    response.sendFile(path.join(__dirname,'./index.html'));
})

// Jab hum ESM module mei __dirname , __filename 

app.get('/Logo.png',(request,response)=>{
    response.sendFile(path.join(__dirname,'./logo.png'));
})

// tio handle the static files node provides us a middleware (ye ek special functuon hotew hai ) called static 

app.all('/*splat',(request,response)=>{
    response.status(404).send("Not found");
})

// if your file contains a file by name index.html then that file is automatically handled at the root route by the static middleware 

// Jab bhi dara behjna hai tabh decide karo ki get se bhejna hai ki post se 

